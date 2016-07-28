---
layout: project
title: patient<br>profiles
time: 2016
heading: IN DEV
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
        <div style="clear:both"></div>
        <div class="chart-height-holder">
            <div class="chart-tooltip-holder">
                <svg class="chart">  
                    <g class="rectholder"></g>
                </svg>
                
                  
                <div class="risk-slider"> 
<!--                    <div class="slider-label toggle">slide risk</div>                    -->
                    <div class="slider">
                        <div class="thumb">
                            <div class="thumb-tooltip"></div>                        
                        </div>                     
                        <div class="fill-inner"></div>                    
                    </div>
                    <div class="slider-label animate">
                    <p class="btn-border">animate
                    </p>
                    </div>                         
                </div>
                
            </div>            
        </div> 
        
    </div>  
</section>