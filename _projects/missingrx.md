---
layout: project
title: patient<br>profiles
time: 2016
heading: IN DEVELOPMENT - An animated representation of patient data footprints (the quantity, and type of data that is recorded) at different risk values. Opaque nodes represent data that a primary care provider (PCP) cannot see! ...Using this as proxy for understanding whether integrated data is cause of adverse drug reactions..
tags:
    - data visualization
    - data science
    - d3.js
    - SQL
theme: '#FC2727'
buttoncolor: #1C85FF
infotextcolor: white
type: individual
custom_css: missingrx
custom_js:  
    - "/assets/scripts/projects/d3.min.js"   
    -  "/assets/scripts/project.js"      
    - "/assets/scripts/projects/missingrx.js"
---

<section class="block block-data-visual noshadow">
    <div class="chartwrapper">
        <div class="chart-header">PATIENT DATA PROFILE</div>    
        <div style="clear:both"></div>
        <div class="chart-height-holder">
            <div class="chart-tooltip-holder">
                <svg class="chart">  
                    <g class="rectholder"></g>
                </svg>
            
                <div class="risk-slider"> 
                    <div class="slider-label toggle">choose risk value</div>                    
                    <div class="slider">
                    </div>
                    <div class="slider-label animate">
                    <p class="btn-border">or <span class="under">animate</span>
                    </p>
                    </div>     
                    <div class="more-info">
                        ?
                    </div>                    
                </div>
                
            </div>            
        </div> 
        
    </div>  
</section>