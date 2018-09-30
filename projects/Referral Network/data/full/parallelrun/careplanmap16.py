import requests
import numpy
import xml
from xml.etree.ElementTree import ElementTree
from xml.etree.ElementTree import Element
from xml.etree.ElementTree import SubElement
import xml.etree.ElementTree as ET
from base64 import b64decode, b64encode
import hashlib
from os import path

# fileNames = [['../../Assessments/CCGAsthma.xml', 'CCG'], ['../../Assessments/CCGCAD.xml', 'CCG'], ['../../Assessments/CCGComplexCaseManagement.xml, 'CCG'], ['../../Assessments/CCGCOPD.xml', 'CCG'], ['../../Assessments/CCGDiabetes.xml', 'CCG'], ['../../Assessments/CCGHeartFailure.xml', 'CCG'], ['../../Assessments/CCGHypertension.xml', 'CCG'], ['../../Assessments/TransitionsOfCareCareCoordinationEvaluation.xml', 'TransitionsOfCare'], ['../../Assessments/TransitionsOfCareOutpatientServices.xml', 'TransitionsOfCare'], ['../../Assessments/TransitionsOfCareSkilledCareFacilityTransition.xml', 'TransitionsOfCare'], ['../../Assessments/TransitionsOfCareTransitionCareAssessment.xml', 'TransitionsOfCare']]

basepath = path.dirname(__file__)


fileNames = [
["TransitionsOfCareEnrollment", "TransitionsOfCare"]
# ,["TransitionsOfCareEDVisit", "TransitionsOfCare"]
# ,["TransitionsOfCareHomeCareCoord", "TransitionsOfCare"]
# ,["TransitionsOfCareEnrollment",  "TransitionsOfCare"]
# ,["TransitionsOfCareHomeTransition",  "TransitionsOfCare"]
]

for fileSample in fileNames:
    fileSample[0] = path.abspath(path.join(basepath, "..", "..", "..", 'Assessments/' + fileSample[0]+'.xml'))

mapping = []
sqlscript = "IF OBJECT_ID('tempdb..##mapHolder') IS NOT NULL DROP TABLE ##mapHolder \n CREATE TABLE ##mapHolder (hsim varchar(255), responseID varchar(255), mappedProblemUid varchar(255))"

for currFile in fileNames:
    tree = ET.parse(currFile[0])
    root = tree.getroot()
    contentVersion = root.get('ContentVersion')
    title = root.get('Title')
    hsim = root.get('Hsim')
    tryme = root.findall('./Section/Section/Question/Answer')
    answerHolder = []
    module = currFile[1]
    for child in tryme:
        uid = child.get('Uid')
        respID = child.get('Id')
        testXML = "<AnswersList><Guideline ContentVersion='" + contentVersion + "' Title='" + title + "' Hsim='" + hsim + "'/><Answer Uid='" + uid +  "' Selected='true' /></AnswersList>"
        answerHolder.append([testXML, uid, respID])
        print(testXML)

    # API - GENERATE HASH
    clientname  = "ArcadiaHealth"
    clientkey = "20I0R0lXpPDL"
    requesttype = "POST"
    #module = "TransitionsOfCare"
    uri = "/api/GA/21/" + module + "/Assessment/"
    stringtohash = uri + hsim + clientname + requesttype + clientkey
    stringtohash = stringtohash.encode('UTF-8')
    url = "https://api-dev.carewebqi.com/api/GA/21/" +  module + "/Assessment/" + hsim
    m = hashlib.sha256()
    m.update(stringtohash)
    enc_key = m.digest()
    hash = b64encode(enc_key).decode('utf-8')

    for payload in answerHolder:
        head = {'Accept': 'application/xml', 'Clientid': clientname, 'Content-Type': 'Application/xml', 'Signature': hash}
        r  = requests.post(url, data=payload[0], headers=head)
        answerTree = ET.fromstring(r.text)
        problem = answerTree.find('./Section/Section/Problem')
        if problem is not None:
            mappedProblem = problem.get('Uid')
            mapping.append([hsim, payload[1], mappedProblem])
            sqlscript = sqlscript + "\n INSERT INTO ##mapHolder SELECT '" + hsim + "' , '" + payload[1] + "',  '" + mappedProblem + "'"

text_file = open(fileNames[0][0]+'map.txt', "w")
text_file.write(sqlscript)
text_file.close()
