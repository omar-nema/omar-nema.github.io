---
layout: project
title: hospital<br>quality
time: 2016
heading: Healthcare pricing is opaque, confusing - and, therefore, ripe for visualization. My interactive visual below enables users to compare cost, quality, and size of 1800 medicare/medicaid hospitals. Filters enable the user to pick apart smaller trends, and explore this public dataset from the bottom-up.<br>A static form of this poster was displayed in the HIMSS healthcare conference, with an accompanying blog post <a href="http://arcadiasolutions.com/weaving-hospital-variation/">here</a>
tags:
    - data visualization
    - data science
    - d3.js
theme: '#FC2727'
infotextcolor: white
type: individual
custom_css: hospitalquality
custom_js: 
    - "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"
    - "/assets/scripts/projects/hospitalquality.js"
custom_sidebar: <div class="slider-holder">
                <div class="slider slider-discharge">
                    <div class="thumb"></div>
                    <div class="fill"></div>                    
                </div>
                <div class="slider slider-patexp">
                    <div class="fill"></div>
                    <div class="thumb"></div>                     
                </div>    
                <div class="slider slider-outcome">
                    <div class="fill"></div>                       
                    <div class="thumb"></div>                  
                </div>       
                <div class="slider slider-cost">
                    <div class="fill"></div>
                    <div class="thumb"></div>                     
                </div>                
            </div>  
---

<section class="block">
    <div class="chartwrapper">
        <svg class="chart">
            <g class="lineholder"></g>
            <g class="axisholder"></g>      
        </svg>
    </div>
</section>


<section class="intro block">
    <div class="intro-text block-text">
        <p style="text-align: center"> 
        An analysis of cost & quality metrics in 1800 medicare & medicaid hospitals
        </p>
    </div>
</section>


<section class="block">
    <header class="block-header">context</header>
    <div class="block-text">
        <p>here..</p>
    </div>
</section>

<section class="block">
    <header class="block-header">visual</header>
    <div class="block-text">
        <p>here..</p>
    </div>
</section>