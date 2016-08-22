---
layout: project
title: patient<br>profiles
time: 2016
heading: This visual has two main purposes - to investigate whether data segmentation (that is, separation of patient records among multiple data sources) is a prevalent issue in healthcare, and at a broader level, to illustrate the composition and quantity of patient data at different risk values.<br>Click the question mark for more information on how to interpret the chart. Analysis done on SQL, and visual created w/ d3.js.
tags:
    - healthcare
    - data visualization
    - data science
    - d3.js
    - SQL
theme: '#FC2727'
buttoncolor: #1C85FF
infotextcolor: white
type: individual
wide_layout: true
custom_css: missingrx
custom_js:  
    - "/assets/scripts/projects/d3.min.js"   
    -  "/assets/scripts/project.js"      
    - "/assets/scripts/projects/missingrx.js"
---

<section class="block block-data-visual noshadow">
    <div class="chartwrapper">
    
        <div class="info-container">
            <div class="more-info">
                    ?
            </div>   
            <div class="info-popup">
                 <p> <span class="span-blue"><br>CONTEXT</span> 
                 <br> <span class="under-thin">Patient profiles</span> - 
                  this interactive graphic shows medical history within 18 months for an average patient. Users can toggle between different risk scores, and observe how the composition and quantity of the average patient's data profile changes.
                  <br>
                <span class="under-thin">Data segmentation</span>- patient medical history is often separated between multiple data sources. As a result, Primary Care Providers may not have the full picture of a patient's history. Incomplete medical data can lead to a number of damaging outcomes - physicians may, for example, inadverdently over-prescribe medications - or issue medications that react adversely with one that is not documented. 
                 <br>In this visual, I have delineated 'missing' data points (those that show up only on a secondary data source) with a higher transparency (faded color). Observe how the quantity of segmented data (particularly prescriptions) varies with different risk scores.

                </p>    

                <div> 
                    <p><span class="span-blue">SYMBOLS  </span></p>
                    <p class="innerp"> 
                        <span class="circle-symbol" style="float:left"></span>
                        &nbsp; = VISIBLE data point (on primary provider's system). Mouse over a data point for information on its value (i.e., a drug name for prescription) 
                    </p> 
                    <p class="innerp"> 
                        <span class="circle-symbol faded" style="float:left"></span>
                        &nbsp; = MISSING data point (on a secondary data source, where provider cannot see)
                    </p> 
                </div>   

                <div style="clear:both"></div>
                <p> <span class="span-blue">DATA SOURCE - </span> Data is collected from a 200,000 member population in the Pactific Northwest. Using SQL, I separated unique data points by data source and grouped by patient risk scores. 
                </p>

        </div>                   
    </div> 
    
        <div class="chart-header">PATIENT DATA PROFILE</div>    
        <div style="clear:both"></div>
        <div class="chart-height-holder">
            <div class="chart-tooltip-holder">
                <svg class="chart">  
                    <g class="rectholder"></g>
                </svg>
                
                 
                
                
                </div>
               
                <div class="risk-slider"> 
                    <div class="slider-label toggle">choose risk value</div>                    
                    <div class="slider">
                    </div>
                    <div class="slider-label animate">
                    <p class="btn-border">or <span class="under">animate</span>
                    </p>
                    </div>     
<!--
                    <div class="more-info">
                        ?
                    </div>                    
-->
                </div>
                
            </div>            
      
        
    </div>  
</section>