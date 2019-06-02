DECLARE @start DATETIME = '2015-01-01'
	, @end DATETIME = '2016-01-01'
	, @provNum INT = 1000;

IF OBJECT_ID('tempdb..#providerMemberMonths') IS NOT NULL DROP TABLE #providerMemberMonths;
SELECT x.PCPID AS ProviderID, x.memberMonths AS MemberMonths
	, x.FullName, x.NPI, x.Specialty
INTO #providerMemberMonths
FROM (
	SELECT x.*
		, ROW_NUMBER() OVER(ORDER BY x.memberMonths DESC) AS rn
	FROM (
		SELECT pa.AttributionProviderID AS PCPID
			, SUM(elig_month) AS MemberMonths
			, REPLACE(REPLACE(pp.ProvFullName, ' ',''), ',', ', ') AS FullName
			, pp.NPI
			, pp.Specialty
		FROM rpt.PersonAttribution pa
		INNER JOIN dbo.plan_member_month mm
		ON pa.personId = mm.person_id
		INNER JOIN dbo.ProviderPerson pp
		ON pa.AttributionProviderID = pp.ProviderPersonID
		WHERE mm.StartDate < @end
		AND mm.EndDate > @start
		GROUP BY pa.AttributionProviderID, pp.ProvFullName, pp.NPI, pp.Specialty
	) x
) x
WHERE x.rn <= @provNum;


INSERT INTO #providerMemberMonths
SELECT DISTINCT u.ProviderID AS ProviderID, 0 AS MemberMonths
			, REPLACE(REPLACE(pp.ProvFullName, ' ',''), ',', ', ') AS FullName
			, pp.NPI
			, pp.Specialty
FROM rpt.UtilEvent u
INNER JOIN dbo.ProviderPerson pp
ON u.ProviderID = pp.ProviderPersonID
WHERE u.EventDate BETWEEN @start AND @end
AND u.ProviderID NOT IN (SELECT ProviderID FROM #providerMemberMonths)

SELECT * FROM #providerMemberMonths;

SELECT SUM(ISNULL(Cost,0)) AS Cost, SUM(ISNULL(RiskAdjustedCost,0)) AS RiskAdjustedCost
	--, COUNT(DISTINCT CAST(PersonID AS VARCHAR(20))+'.'+CONVERT(VARCHAR(20), EventDate,101)) AS UniqueEvents
	, COUNT(1) AS Frequency
	, x.minor AS Minor
	, x.major AS Major
	, pa.AttributionProviderID AS PCPID
	, u.ProviderID AS ServiceProviderID
	, InNetwork
FROM rpt.UtilEvent u
INNER JOIN rpt.PersonAttribution pa
ON u.PersonID = pa.PersonID
INNER JOIN dbo.ProviderPerson pcp
ON pa.AttributionProviderID = pcp.ProviderPersonID
INNER JOIN dbo.ProviderPerson svcProv
ON u.ProviderID = svcProv.ProviderPersonID
INNER JOIN #providerMemberMonths mm
ON pcp.ProviderPersonID = mm.ProviderID
INNER JOIN (
	SELECT pcm.CodeValue, minor.CCSMinorDescription AS minor, major.CCSMajorName AS major
	FROM ccs.ProcedureCodeMap pcm
	INNER JOIN ccs.ProcedureMinorCategory minor
	ON pcm.CCSMinorCode = minor.CCSMinorCode
	INNER JOIN ccs.ProcedureMajorCategory major
	ON minor.CCSMajorCode = major.CCSMajorCode
	WHERE pcm.CodeType = 'CPT'
) x 
ON x.CodeValue = u.ProcedureID
WHERE u.EventDate BETWEEN @start AND @end
GROUP BY x.minor
	, x.major
	, pa.AttributionProviderID
	, u.ProviderID
	, InNetwork
HAVING COUNT(1) > 1;

