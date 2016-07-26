---
layout: project
title: hospital<br>quality
time: 2016
heading: Healthcare pricing is opaque, confusing - and, therefore, ripe for visualization. My interactive visual below enables users to compare cost, quality, and size of roughly two-thousand medicare/medicaid hospitals. Filters enable the user to pick apart smaller trends, and explore cost/quality public datasets from the bottom-up.<br>A static form of this poster was displayed in the HIMSS healthcare conference, with an accompanying blog post <a href="http://arcadiasolutions.com/weaving-hospital-variation/">here</a>. <br><br>Optimized for Google Chrome / desktop devices. (Tutorial feature coming soon..)
tags:
    - data visualization
    - data science
    - d3.js
    - SQL
    - R
theme: '#FC2727'
buttoncolor: #1C85FF
infotextcolor: white
type: individual
custom_css: hospitalquality
custom_js:  
    -  "/assets/scripts/project.js"
    - "/assets/scripts/projects/d3.min.js"       
    - "/assets/scripts/projects/jqueryui.js"    
    - "/assets/scripts/projects/hospitalquality.js"
custom_sidebar: hospitalquality-sidebar.html 
---

<section class="block block-data-visual noshadow">

    <div class="chartwrapper">
        <svg class="axislabels"></svg>
        <div style="clear:both"></div>
        <div class="chart-height-holder">
            <div class="chart-tooltip-holder">
                <svg class="chart">      
                    <g class="lineholder"></g>
                    <g class="axisholder"></g>      
                </svg>
            </div>            
        </div> 
        
    </div>  
<!--
    <div class ="question-mark">
        ?
    </div>    
-->
</section>
<!--

<section class="block">
    <header class="block-header">overview</header>
    <div class="block-text">
        <p>
        Moving towards: accountability in healthcare pricing.
        <br>
The graphic above displays (aggregate, percentile-based) billed costs, hospital size, outcome quality, and patient experience. <br><br> This chart is intended for bottom-up data exploration - users can use the filter button to show relevant demographic info, variables, values, or providers. Mouse over axes or lines for more information about underlying data!
<br> Visually, plotting many things
        </p>
    </div>
</section>


<section class="block">
    <header class="block-header">findings</header>
    <div class="block-text">
        <p>
        It doesn't matter what you pay, your quality of care is likely to be the same across different providers.
        <br>
        There is no correlation (visually or quantitatively) between cost and quality of care (as evidenced by the scattered, spaghetti-like display of the above chart).
        <br><br>
         You may notice  X-shaped weaves different axes (outcome and patient experience are a clear example). This points to anti-correlation.  We see a clustering of hospitals with large size and low outcome forming the downward slope of the X and low size, high-outcome hospitals creating the upward slope. 
         <br><br>
        Other insights may be noticed at a granular (state, zip) level.
        </p>
    </div>
</section>


<section class="block">
    <header class="block-header">data sources</header>
    <div class="block-text">
        <p>
        All values displayed above are percentile-ranked among the sample of 1800 medicare/medicaid hospitals displayed above. 
        Outcome and patient experience values were simply taken from 
        <br>
        The CMS patient experience rating is based on a survey encompassing medical staff communication, pain management, and hospital environment. Outcome takes into account mortality, infection rate, and functional ability following discharg
        
        Cost-index
         I distilled billed Medicare cost for each provider to a single percentile-weighted number that takes into account relative price. This cost index aggregates billed amounts for procedures, weighed by frequency and price in comparison to other hospitals. (A hospital, for example, that focuses on costly procedures, but offers these procedures at a price lower than competition, will have a low cost index)
    
    Quality information – broken down to patient experience of care and outcome ratings. The CMS patient experience rating is based on a survey encompassing medical staff communication, pain management, and hospital environment. Outcome takes into account mortality, infection rate, and functional ability following discharge.
    
        Size
    Using the number of procedures as a proxy for hospital size, we were able to evaluate each hospital on the axes of cost, patient experience, outcome, and size. Hospital performance profiles were developed by standardizing all four comparison variables on percentile scales. For example, a hospital with low cost percentile scores and high quality has a high-performing profile.    
    
        
        </p>
    </div>
</section>-->
