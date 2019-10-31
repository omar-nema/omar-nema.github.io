





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-/YEVWs7BzxfKyUd6zVxjEQcXRWsLbcEjv045Rq8DSoipySmQblhVKxlXLva2GtNd5DhwCxHwW1RM0N9I7S2Vew==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-481a47a96965f6706fb41bae0d14b09a.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-ZeXRnWYCu8+fvsUFY0/VTPql8vwvSfrBVUoZlQNG17AZTnz1N3mvsz8dmX705rPZPJYQ/ekLzym0eof+ity3Ew==" rel="stylesheet" href="https://github.githubassets.com/assets/github-4aa6c31d1652b09080e404b2bf72f75c.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>portfolio-old/jqueryui.js at master · omar-nema/portfolio-old</title>
    <meta name="description" content="Contribute to omar-nema/portfolio-old development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars1.githubusercontent.com/u/19559239?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="omar-nema/portfolio-old" /><meta name="twitter:description" content="Contribute to omar-nema/portfolio-old development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/19559239?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="omar-nema/portfolio-old" /><meta property="og:url" content="https://github.com/omar-nema/portfolio-old" /><meta property="og:description" content="Contribute to omar-nema/portfolio-old development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDQ5NTQxNzQ4OmI4ZGJmMTgzOTc0OTg1N2Q1YWVkMDZkMmYzYzA5MzJiNDg4NWZlMWRhNWUyMTQ2NjEyOTZiMjE4MjUyNDIwMzI=--c8b20abab19f9dbc079fa53cd226f3cdf567ad14">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="F63A:44D2:E32F10:1BA68B0:5DBB4DDF" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="F63A:44D2:E32F10:1BA68B0:5DBB4DDF" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="6416049790181252265" /><meta name="octolytics-actor-id" content="19559239" /><meta name="octolytics-actor-login" content="omar-nema" /><meta name="octolytics-actor-hash" content="7b23be96dd4b84d1bb21222a110cc3fd7a28475491e1c5ea80f9de7c9243b4b4" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="d021b1698e43b79eb2662b5040cd8657">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="omar-nema">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NTNjNzY1MTA2ZjI3MWJiZjFhMTZmOGRjYTUyMTMxODg5MGZhZDZjOGQ1ZTAyZWI4MjdlYzQ5MjcyMjljNGI3MHx7InJlbW90ZV9hZGRyZXNzIjoiMjQuMTg1LjE2Ny4xMjUiLCJyZXF1ZXN0X2lkIjoiRjYzQTo0NEQyOkUzMkYxMDoxQkE2OEIwOjVEQkI0RERGIiwidGltZXN0YW1wIjoxNTcyNTU2MjU3LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

  <meta name="html-safe-nonce" content="db3fe0990a60d473f2cbd09ffce09545103ed2da">

  <meta http-equiv="x-pjax-version" content="cc59f3ee6c7a4c60b015e0f7afc972d3">
  

      <link href="https://github.com/omar-nema/portfolio-old/commits/master.atom" rel="alternate" title="Recent Commits to portfolio-old:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/omar-nema/portfolio-old git https://github.com/omar-nema/portfolio-old.git">

  <meta name="octolytics-dimension-user_id" content="19559239" /><meta name="octolytics-dimension-user_login" content="omar-nema" /><meta name="octolytics-dimension-repository_id" content="150660903" /><meta name="octolytics-dimension-repository_nwo" content="omar-nema/portfolio-old" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="150660903" /><meta name="octolytics-dimension-repository_network_root_nwo" content="omar-nema/portfolio-old" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <meta name="webauthn-auth-enabled" content="true">

  <meta name="webauthn-registration-enabled" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


          <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="150660903" data-scoped-search-url="/omar-nema/portfolio-old/search" data-unscoped-search-url="/search" action="/omar-nema/portfolio-old/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=QYBou0M9CLZH4W3cGpNcaTgngwW8fFGz6j2SziXLDwV7KKjgMKDmFlRQ67O/mUwCtuYPvRTfeyeGvnsRzSm1TA=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/omar-nema">
      <img class="avatar" height="20" width="20" alt="@omar-nema" src="https://avatars1.githubusercontent.com/u/19559239?s=60&amp;v=4" />
      omar-nema
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="6ddDaAl+5JvNCdGEktzdXaUpMUA20BSbJ0ebqE24vugetKTgv/rtg3WDht84eiGr3SCHeVZx44KV8H2JcnYGEQ==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/omar-nema">omar-nema</a>
    /
    <a class="Header-link" href="/omar-nema/portfolio-old">portfolio-old</a>

</div>
    </div>


    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      

    <a aria-label="You have unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:unread" data-channel="notification-changed:19559239" href="/notifications">
        <span class="mail-status unread"></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="omar-nema/portfolio-old">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/omar-nema/portfolio-old/issues/new" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/omar-nema/feature_preview/indicator_check.json">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@omar-nema" class="avatar" src="https://avatars2.githubusercontent.com/u/19559239?s=40&amp;v=4" height="20" width="20">
      <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/omar-nema" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">omar-nema</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:19559239,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:19559239,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;}}" data-hydro-click-hmac="47c0e8ea369817c4cefb0821ac1e27eb99b4e8f0250cc178cbb868671a6080bb">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="x9Qo7iiz1qrByAqGuVMHclH0EP1pHeKrP6K8uuGhuV3cJ3fUIrfeewtCUAAZbZJ8dl5wHIc1192iZekavwg93w==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-10-31T17:40:58-04:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-10-31T18:10:58-04:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-10-31T21:10:58-04:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-10-31T23:59:59-04:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-11-03T23:59:59-05:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/omar-nema" data-ga-click="Header, go to profile, text:your profile">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/omar-nema?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/omar-nema?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/omar-nema?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/omar-nema/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}"
    data-feature-preview-close-hmac="ceaf8ebc16d7d7285094e56217d06e3f39c0f3f693b12043077dd1e53a1ccf20"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}"
    data-hydro-click-hmac="40c26987af188a9ef26bfca1d4c6f445abc2106e56322eac0a5d539ced321954"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="0gBWW2n3jQmIrmrPsIng23VRK+TIoxPXMcMPry3uMQglY7HT33OEETAkPZQaLxwtDVid3agC5M6DdOmOEiCJ8Q==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  

      <div class="border-bottom shelf intro-shelf js-notice mb-0 pb-4">
  <div class="width-full container">
    <div class="width-full mx-auto shelf-content">
      <h2 class="shelf-title">Learn Git and GitHub without any code!</h2>
      <p class="shelf-lead">
          Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.
      </p>
      <a class="btn btn-primary shelf-cta" target="_blank" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;READ_GUIDE&quot;,&quot;repository_id&quot;:150660903,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}" data-hydro-click-hmac="971317709a45702faf0412e0c3c414cad9eee1335d9bff1c81c3f34cf37eae12" href="https://guides.github.com/activities/hello-world/">Read the guide</a>
    </div>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="shelf-dismiss js-notice-dismiss" action="/dashboard/dismiss_bootcamp" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="delete" /><input type="hidden" name="authenticity_token" value="utTnwRffB9Qec+q4r1wuxuRJPvd81Uv25a2mMczfPu7/YQXm/QSs3nSQLoQ5U8H9GVR/T7/ZCeMttcP3IaP6bw==" />
      <button name="button" type="submit" class="mr-1 close-button tooltipped tooltipped-w" aria-label="Hide this notice forever" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;DISMISS_BANNER&quot;,&quot;repository_id&quot;:150660903,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}" data-hydro-click-hmac="b04f893edfc603cfbb213c4d44868127514ec908254971103b9a7fc7fb286aad">
        <svg aria-label="Hide this notice forever" class="octicon octicon-x v-align-text-top" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
</button></form>  </div>
</div>











  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="AHuxD31fXqd7xxugT1asW/j0ySaEUfbp9ywm82MYLepUDnYq9BpY/AKbJJn5PaDoVA/4KzJ9wfstIi2S9UDd9Q==" />      <input type="hidden" name="repository_id" value="150660903">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:150660903,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}" data-hydro-click-hmac="f3fd868a7d7257b9bd444c4675bee04660b500059e055a210ab3a4893fbb0abf" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Unwatch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/omar-nema/portfolio-old/watchers"
          aria-label="1 user is watching this repository">
          1
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/omar-nema/portfolio-old/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="QEJqv1Wv+V3FDbv7FuxUWys83R34dDRs1bAAE6Sqnrq3lIGIO02QX9dCuECu8o+13Qj5vWbBZCEsJy72N/aocw==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar omar-nema/portfolio-old" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:150660903,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}" data-hydro-click-hmac="29693ab1e129a0617a31127b8d18fd462b5fdfd8a11c620d55070fe2965fc672" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/omar-nema/portfolio-old/stargazers"
           aria-label="0 users starred this repository">
           0
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/omar-nema/portfolio-old/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Tcl5Y40SVMiC/tXSdaRUozS+yzcOYh1KEP5g/n7OV0u2CQFQd0JinYcn3eOwS5SI04oMR1LaoOBaejITN4QXBA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star omar-nema/portfolio-old" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:150660903,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}" data-hydro-click-hmac="3337a33085a8a5b7e74c9859c24e641c24ec5e8d7416d733849367121b8d040d" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
</button>        <a class="social-count js-social-count" href="/omar-nema/portfolio-old/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>

  </li>

  <li>
          <details class="details-reset details-overlay details-overlay-dark d-inline-block float-left">
            <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:150660903,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}" data-hydro-click-hmac="0cc56e506e543dfcf0f64c726a2e6a3236a2dedaf1055c0fe6b05d097befe68c" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" title="Fork your own copy of omar-nema/portfolio-old to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</summary>            <details-dialog
              class="anim-fade-in fast Box Box--overlay d-flex flex-column"
              src="/omar-nema/portfolio-old/fork?fragment=1"
              preload>
              <div class="Box-header">
                <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
                  <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
                </button>
                <h3 class="Box-title">Fork portfolio-old</h3>
              </div>
              <div class="overflow-auto text-center">
                <include-fragment>
                  <div class="octocat-spinner my-3" aria-label="Loading..."></div>
                  <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/omar-nema/portfolio-old/fork">the fork page</a> directly.</p>
                </include-fragment>
              </div>
            </details-dialog>
          </details>

    <a href="/omar-nema/portfolio-old/network/members" class="social-count"
       aria-label="0 users forked this repository">
      0
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=19559239" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/omar-nema">omar-nema</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/omar-nema/portfolio-old">portfolio-old</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /omar-nema/portfolio-old" href="/omar-nema/portfolio-old">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /omar-nema/portfolio-old/issues" href="/omar-nema/portfolio-old/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /omar-nema/portfolio-old/pulls" href="/omar-nema/portfolio-old/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /omar-nema/portfolio-old/projects" href="/omar-nema/portfolio-old/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /omar-nema/portfolio-old/wiki" href="/omar-nema/portfolio-old/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /omar-nema/portfolio-old/network/alerts" href="/omar-nema/portfolio-old/network/alerts">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /omar-nema/portfolio-old/pulse" href="/omar-nema/portfolio-old/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_settings repo_branch_settings hooks integration_installations repo_keys_settings issue_template_editor secrets_settings key_links_settings /omar-nema/portfolio-old/settings" href="/omar-nema/portfolio-old/settings">
      <svg class="octicon octicon-gear" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
      Settings
</a>
</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /omar-nema/portfolio-old" href="/omar-nema/portfolio-old">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /omar-nema/portfolio-old/issues" href="/omar-nema/portfolio-old/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /omar-nema/portfolio-old/pulls" href="/omar-nema/portfolio-old/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">1</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /omar-nema/portfolio-old/projects" href="/omar-nema/portfolio-old/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /omar-nema/portfolio-old/wiki" href="/omar-nema/portfolio-old/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /omar-nema/portfolio-old/network/alerts" href="/omar-nema/portfolio-old/network/alerts">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /omar-nema/portfolio-old/pulse" href="/omar-nema/portfolio-old/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /omar-nema/portfolio-old/community" href="/omar-nema/portfolio-old/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/omar-nema/portfolio-old/blob/5d932188023162266fd85deafa8333966ecb3908/_site/assets/scripts/projects/jqueryui.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:19675e6f4ebda0e68cf4d8618fb45e66 -->
      

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/omar-nema/portfolio-old/ref-list/master/_site/assets/scripts/projects/jqueryui.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/omar-nema/portfolio-old/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="_site/assets/scripts/projects/jqueryui.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/omar-nema/portfolio-old"><span>portfolio-old</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/omar-nema/portfolio-old/tree/master/_site"><span>_site</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/omar-nema/portfolio-old/tree/master/_site/assets"><span>assets</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/omar-nema/portfolio-old/tree/master/_site/assets/scripts"><span>scripts</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects"><span>projects</span></a></span><span class="separator">/</span><strong class="final-path">jqueryui.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/omar-nema/portfolio-old/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="_site/assets/scripts/projects/jqueryui.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=14199909" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/omarnema"><img class="avatar" src="https://avatars2.githubusercontent.com/u/14199909?s=40&amp;v=4" width="20" height="20" alt="@omarnema" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="contributor" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=14199909" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/omarnema">omarnema</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="ASd" class="link-gray" href="/omar-nema/portfolio-old/commit/117c0db426b51146605bcae06398391ddaba470d">ASd</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/omar-nema/portfolio-old/commit/117c0db426b51146605bcae06398391ddaba470d" data-pjax>117c0db</a>
          <relative-time datetime="2018-09-28T00:04:05Z" class="no-wrap">Sep 27, 2018</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>1</strong> contributor</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/omar-nema/portfolio-old/contributors/master/_site/assets/scripts/projects/jqueryui.js/list" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
    </div>
  </div>

        

<div class="flash flash-warn mt-3 d-flex flex-justify-between flex-column flex-md-row flex-md-items-center">
  <div class="flex-column mb-2 mb-md-0 mr-0 pr-md-4">
      <h5 class="mb-1" style="display-inline"><svg height="18" class="octicon octicon-alert mr-1" viewBox="0 0 16 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>We found potential security vulnerabilities in your dependencies.</h5>
    <p class="text-small">
        Only the owner of this repository can see this message.
    </p>
  </div>
    <div>
      <a href="/omar-nema/portfolio-old/network/alerts" class="btn mt-2 mt-md-0" data-octo-click="vuln_alert_review">See security alerts</a>
    </div>
</div>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      3 lines (2 sloc)
      <span class="file-info-divider"></span>
    55.3 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/omar-nema/portfolio-old/raw/master/_site/assets/scripts/projects/jqueryui.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/omar-nema/portfolio-old/blame/master/_site/assets/scripts/projects/jqueryui.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/omar-nema/portfolio-old/commits/master/_site/assets/scripts/projects/jqueryui.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw hide-sm"
               href="https://desktop.github.com"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/omar-nema/portfolio-old/edit/master/_site/assets/scripts/projects/jqueryui.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="GLmltYrY1yHnLoC06GD0N2hYCiokxxdnFd4azOnYZjFUcJqte+oQpmxPKXxk7LgPMVrVb6q/VnYVhMlpzMrw2g==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Edit this file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/omar-nema/portfolio-old/delete/master/_site/assets/scripts/projects/jqueryui.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="FokBN3aP9ih5i2DE6hyBB+FSDaJoc7sb/Srf9F6/HJb4Hzf4qnpjGD71ubDNnxkxdketN86TQtvG+scMwfyLFA==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Delete this file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>



        <div class="f6 v-align-middle text-gray px-3 py-2 border-bottom bg-gray-light d-flex flex-justify-between">
            <p class="text-mono mb-0">
              <svg style="color: #d3ac3b;" class="octicon octicon-primitive-dot" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/></svg>
              Code navigation is still being calculated for this commit. Check back in a bit.
                <span class="lh-condensed px-1 rounded-1 border border-green text-normal text-small">Beta</span>
            </p>
            <div>
              <a href="https://help.github.com/en/articles/navigating-code-on-github">Learn more</a>
              or
              <a href="mailto:code-nav@github.com">give us feedback</a>
            </div>
        </div>

      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(function(t){&quot;function&quot;==typeof define&amp;&amp;define.amd?define([&quot;jquery&quot;],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version=&quot;1.12.0&quot;;var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,&quot;events&quot;),s&amp;&amp;s.remove&amp;&amp;t(n).triggerHandler(&quot;remove&quot;)}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(&quot;.&quot;)[0];e=e.split(&quot;.&quot;)[1];var h=l+&quot;-&quot;+e;return s||(s=i,i=t.Widget),t.isArray(s)&amp;&amp;(s=t.extend.apply(null,[{}].concat(s))),t.expr[&quot;:&quot;][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&amp;&amp;this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+&quot;.&quot;+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r&gt;a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&amp;&amp;void 0!==n&amp;&amp;(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a=&quot;string&quot;==typeof o,r=i.call(arguments,1),l=this;return a?this.each(function(){var i,s=t.data(this,n);return&quot;instance&quot;===o?(l=s,!1):s?t.isFunction(s[o])&amp;&amp;&quot;_&quot;!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&amp;&amp;void 0!==i?(l=i&amp;&amp;i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error(&quot;no such method &#39;&quot;+o+&quot;&#39; for &quot;+e+&quot; widget instance&quot;):t.error(&quot;cannot call methods on &quot;+e+&quot; prior to initialization; &quot;+&quot;attempted to call method &#39;&quot;+o+&quot;&#39;&quot;)}):(r.length&amp;&amp;(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&amp;&amp;e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:&quot;widget&quot;,widgetEventPrefix:&quot;&quot;,defaultElement:&quot;&lt;div&gt;&quot;,options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace=&quot;.&quot;+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&amp;&amp;(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&amp;&amp;this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&amp;&amp;this._setOptionDisabled(this.options.disabled),this._trigger(&quot;create&quot;,null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr(&quot;aria-disabled&quot;),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if(&quot;string&quot;==typeof e)if(a={},s=e.split(&quot;.&quot;),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1&gt;o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return&quot;classes&quot;===t&amp;&amp;this._setOptionClasses(e),this.options[t]=e,&quot;disabled&quot;===t&amp;&amp;this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&amp;&amp;n&amp;&amp;n.length&amp;&amp;(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+&quot;-disabled&quot;,null,!!t),t&amp;&amp;(this._removeClass(this.hoverable,null,&quot;ui-state-hover&quot;),this._removeClass(this.focusable,null,&quot;ui-state-focus&quot;))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length&gt;r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&amp;&amp;e.classes[i[r]]&amp;&amp;s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&amp;&amp;i(e.keys.match(/\S+/g)||[],!0),e.extra&amp;&amp;i(e.extra.match(/\S+/g)||[]),s.join(&quot; &quot;)},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s=&quot;boolean&quot;==typeof s?s:i;var n=&quot;string&quot;==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;&quot;boolean&quot;!=typeof e&amp;&amp;(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&amp;&amp;!t(this).hasClass(&quot;ui-state-disabled&quot;)?(&quot;string&quot;==typeof a?o[a]:a).apply(o,arguments):void 0}&quot;string&quot;!=typeof a&amp;&amp;(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||&quot;&quot;).split(&quot; &quot;).join(this.eventNamespace+&quot; &quot;)+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return(&quot;string&quot;==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,&quot;ui-state-hover&quot;)},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,&quot;ui-state-hover&quot;)}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,&quot;ui-state-focus&quot;)},focusout:function(e){this._removeClass(t(e.currentTarget),null,&quot;ui-state-focus&quot;)}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&amp;&amp;a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:&quot;fadeIn&quot;,hide:&quot;fadeOut&quot;},function(e,i){t.Widget.prototype[&quot;_&quot;+e]=function(s,n,o){&quot;string&quot;==typeof n&amp;&amp;(n={effect:n});var a,r=n?n===!0||&quot;number&quot;==typeof n?i:n.effect||i:e;n=n||{},&quot;number&quot;==typeof n&amp;&amp;(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&amp;&amp;s.delay(n.delay),a&amp;&amp;t.effects&amp;&amp;t.effects.effect[r]?s[e](n):r!==e&amp;&amp;s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&amp;&amp;o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o,a=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;o=function(){var e=t(&quot;&lt;div&gt;&quot;).css(&quot;position&quot;,&quot;absolute&quot;).appendTo(&quot;body&quot;).offset({top:1.5,left:1.5}),i=1.5===e.offset().top;return e.remove(),o=function(){return i},i},t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t(&quot;&lt;div style=&#39;display:block;position:absolute;width:50px;height:50px;overflow:hidden;&#39;&gt;&lt;div style=&#39;height:100px;width:auto;&#39;&gt;&lt;/div&gt;&lt;/div&gt;&quot;),o=s.children()[0];return t(&quot;body&quot;).append(s),e=o.offsetWidth,s.css(&quot;overflow&quot;,&quot;scroll&quot;),i=o.offsetWidth,e===i&amp;&amp;(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?&quot;&quot;:e.element.css(&quot;overflow-x&quot;),s=e.isWindow||e.isDocument?&quot;&quot;:e.element.css(&quot;overflow-y&quot;),n=&quot;scroll&quot;===i||&quot;auto&quot;===i&amp;&amp;e.width&lt;e.element[0].scrollWidth,o=&quot;scroll&quot;===s||&quot;auto&quot;===s&amp;&amp;e.height&lt;e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&amp;&amp;9===i[0].nodeType,o=!s&amp;&amp;!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=t.extend({},n);var p,g,m,_,v,b,y=t(n.of),w=t.position.getWithinInfo(n.within),k=t.position.getScrollInfo(w),x=(n.collision||&quot;flip&quot;).split(&quot; &quot;),D={};return b=s(y),y[0].preventDefault&amp;&amp;(n.at=&quot;left top&quot;),g=b.width,m=b.height,_=b.offset,v=t.extend({},_),t.each([&quot;my&quot;,&quot;at&quot;],function(){var t,e,i=(n[this]||&quot;&quot;).split(&quot; &quot;);1===i.length&amp;&amp;(i=h.test(i[0])?i.concat([&quot;center&quot;]):c.test(i[0])?[&quot;center&quot;].concat(i):[&quot;center&quot;,&quot;center&quot;]),i[0]=h.test(i[0])?i[0]:&quot;center&quot;,i[1]=c.test(i[1])?i[1]:&quot;center&quot;,t=u.exec(i[0]),e=u.exec(i[1]),D[this]=[t?t[0]:0,e?e[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===x.length&amp;&amp;(x[1]=x[0]),&quot;right&quot;===n.at[0]?v.left+=g:&quot;center&quot;===n.at[0]&amp;&amp;(v.left+=g/2),&quot;bottom&quot;===n.at[1]?v.top+=m:&quot;center&quot;===n.at[1]&amp;&amp;(v.top+=m/2),p=e(D.at,g,m),v.left+=p[0],v.top+=p[1],this.each(function(){var s,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=i(this,&quot;marginLeft&quot;),b=i(this,&quot;marginTop&quot;),C=u+f+i(this,&quot;marginRight&quot;)+k.width,T=d+b+i(this,&quot;marginBottom&quot;)+k.height,M=t.extend({},v),I=e(D.my,c.outerWidth(),c.outerHeight());&quot;right&quot;===n.my[0]?M.left-=u:&quot;center&quot;===n.my[0]&amp;&amp;(M.left-=u/2),&quot;bottom&quot;===n.my[1]?M.top-=d:&quot;center&quot;===n.my[1]&amp;&amp;(M.top-=d/2),M.left+=I[0],M.top+=I[1],o()||(M.left=l(M.left),M.top=l(M.top)),s={marginLeft:f,marginTop:b},t.each([&quot;left&quot;,&quot;top&quot;],function(e,i){t.ui.position[x[e]]&amp;&amp;t.ui.position[x[e]][i](M,{targetWidth:g,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:s,collisionWidth:C,collisionHeight:T,offset:[p[0]+I[0],p[1]+I[1]],my:n.my,at:n.at,within:w,elem:c})}),n.using&amp;&amp;(h=function(t){var e=_.left-M.left,i=e+g-u,s=_.top-M.top,o=s+m-d,l={target:{element:y,left:_.left,top:_.top,width:g,height:m},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0&gt;i?&quot;left&quot;:e&gt;0?&quot;right&quot;:&quot;center&quot;,vertical:0&gt;o?&quot;top&quot;:s&gt;0?&quot;bottom&quot;:&quot;middle&quot;};u&gt;g&amp;&amp;g&gt;r(e+i)&amp;&amp;(l.horizontal=&quot;center&quot;),d&gt;m&amp;&amp;m&gt;r(s+o)&amp;&amp;(l.vertical=&quot;middle&quot;),l.important=a(r(e),r(i))&gt;a(r(s),r(o))?&quot;horizontal&quot;:&quot;vertical&quot;,n.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-o-n;e.collisionWidth&gt;o?l&gt;0&amp;&amp;0&gt;=h?(i=t.left+l+e.collisionWidth-o-n,t.left+=l-i):t.left=h&gt;0&amp;&amp;0&gt;=l?n:l&gt;h?n+o-e.collisionWidth:n:l&gt;0?t.left+=l:h&gt;0?t.left-=h:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-o-n;e.collisionHeight&gt;o?l&gt;0&amp;&amp;0&gt;=h?(i=t.top+l+e.collisionHeight-o-n,t.top+=l-i):t.top=h&gt;0&amp;&amp;0&gt;=l?n:l&gt;h?n+o-e.collisionHeight:n:l&gt;0?t.top+=l:h&gt;0?t.top-=h:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-a-l,d=&quot;left&quot;===e.my[0]?-e.elemWidth:&quot;right&quot;===e.my[0]?e.elemWidth:0,p=&quot;left&quot;===e.at[0]?e.targetWidth:&quot;right&quot;===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0&gt;c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0&gt;i||r(c)&gt;i)&amp;&amp;(t.left+=d+p+f)):u&gt;0&amp;&amp;(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s&gt;0||u&gt;r(s))&amp;&amp;(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-a-l,d=&quot;top&quot;===e.my[1],p=d?-e.elemHeight:&quot;bottom&quot;===e.my[1]?e.elemHeight:0,f=&quot;top&quot;===e.at[1]?e.targetHeight:&quot;bottom&quot;===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0&gt;c?(s=t.top+p+f+g+e.collisionHeight-a-o,(0&gt;s||r(c)&gt;s)&amp;&amp;(t.top+=p+f+g)):u&gt;0&amp;&amp;(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i&gt;0||u&gt;r(i))&amp;&amp;(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id=&quot;ui-id-&quot;+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&amp;&amp;t(this).removeAttr(&quot;id&quot;)})}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget(&quot;ui.menu&quot;,{version:&quot;1.12.0&quot;,defaultElement:&quot;&lt;ul&gt;&quot;,delay:300,options:{icons:{submenu:&quot;ui-icon-caret-1-e&quot;},items:&quot;&gt; *&quot;,menus:&quot;ul&quot;,position:{my:&quot;left top&quot;,at:&quot;right top&quot;},role:&quot;menu&quot;,blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass(&quot;ui-menu&quot;,&quot;ui-widget ui-widget-content&quot;),this._on({&quot;mousedown .ui-menu-item&quot;:function(t){t.preventDefault()},&quot;click .ui-menu-item&quot;:function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&amp;&amp;i.not(&quot;.ui-state-disabled&quot;).length&amp;&amp;(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(&quot;.ui-menu&quot;).length?this.expand(e):!this.element.is(&quot;:focus&quot;)&amp;&amp;s.closest(&quot;.ui-menu&quot;).length&amp;&amp;(this.element.trigger(&quot;focus&quot;,[!0]),this.active&amp;&amp;1===this.active.parents(&quot;.ui-menu&quot;).length&amp;&amp;clearTimeout(this.timer)))},&quot;mouseenter .ui-menu-item&quot;:function(e){if(!this.previousFilter){var i=t(e.target).closest(&quot;.ui-menu-item&quot;),s=t(e.currentTarget);i[0]===s[0]&amp;&amp;(this._removeClass(s.siblings().children(&quot;.ui-state-active&quot;),null,&quot;ui-state-active&quot;),this.focus(e,s))}},mouseleave:&quot;collapseAll&quot;,&quot;mouseleave .ui-menu&quot;:&quot;collapseAll&quot;,focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&amp;&amp;this.collapseAll(e)})},keydown:&quot;_keydown&quot;}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&amp;&amp;this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(&quot;.ui-menu-item&quot;).removeAttr(&quot;role aria-disabled&quot;),i=e.children(&quot;.ui-menu-item-wrapper&quot;).removeUniqueId().removeAttr(&quot;tabIndex role aria-haspopup&quot;);this.element.removeAttr(&quot;aria-activedescendant&quot;).find(&quot;.ui-menu&quot;).addBack().removeAttr(&quot;role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex&quot;).removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data(&quot;ui-menu-submenu-caret&quot;)&amp;&amp;e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move(&quot;first&quot;,&quot;first&quot;,e);break;case t.ui.keyCode.END:this._move(&quot;last&quot;,&quot;last&quot;,e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&amp;&amp;!this.active.is(&quot;.ui-state-disabled&quot;)&amp;&amp;this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||&quot;&quot;,n=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&amp;&amp;-1!==i.index(this.active.next())?this.active.nextAll(&quot;.ui-menu-item&quot;):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&amp;&amp;e.preventDefault()},_activate:function(t){this.active&amp;&amp;!this.active.is(&quot;.ui-state-disabled&quot;)&amp;&amp;(this.active.children(&quot;[aria-haspopup=&#39;true&#39;]&quot;).length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass(&quot;ui-menu-icons&quot;,null,!!this.element.find(&quot;.ui-icon&quot;).length),s=l.filter(&quot;:not(.ui-menu)&quot;).hide().attr({role:this.options.role,&quot;aria-hidden&quot;:&quot;true&quot;,&quot;aria-expanded&quot;:&quot;false&quot;}).each(function(){var e=t(this),i=e.prev(),s=t(&quot;&lt;span&gt;&quot;).data(&quot;ui-menu-submenu-caret&quot;,!0);a._addClass(s,&quot;ui-menu-icon&quot;,&quot;ui-icon &quot;+r),i.attr(&quot;aria-haspopup&quot;,&quot;true&quot;).prepend(s),e.attr(&quot;aria-labelledby&quot;,i.attr(&quot;id&quot;))}),this._addClass(s,&quot;ui-menu&quot;,&quot;ui-widget ui-widget-content ui-front&quot;),e=l.add(this.element),i=e.find(this.options.items),i.not(&quot;.ui-menu-item&quot;).each(function(){var e=t(this);a._isDivider(e)&amp;&amp;a._addClass(e,&quot;ui-menu-divider&quot;,&quot;ui-widget-content&quot;)}),n=i.not(&quot;.ui-menu-item, .ui-menu-divider&quot;),o=n.children().not(&quot;.ui-menu&quot;).uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,&quot;ui-menu-item&quot;)._addClass(o,&quot;ui-menu-item-wrapper&quot;),i.filter(&quot;.ui-state-disabled&quot;).attr(&quot;aria-disabled&quot;,&quot;true&quot;),this.active&amp;&amp;!t.contains(this.element[0],this.active[0])&amp;&amp;this.blur()},_itemRole:function(){return{menu:&quot;menuitem&quot;,listbox:&quot;option&quot;}[this.options.role]},_setOption:function(t,e){if(&quot;icons&quot;===t){var i=this.element.find(&quot;.ui-menu-icon&quot;);this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr(&quot;aria-disabled&quot;,t+&quot;&quot;),this._toggleClass(null,&quot;ui-state-disabled&quot;,!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&amp;&amp;&quot;focus&quot;===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(&quot;.ui-menu-item-wrapper&quot;),this._addClass(s,null,&quot;ui-state-active&quot;),this.options.role&amp;&amp;this.element.attr(&quot;aria-activedescendant&quot;,s.attr(&quot;id&quot;)),n=this.active.parent().closest(&quot;.ui-menu-item&quot;).children(&quot;.ui-menu-item-wrapper&quot;),this._addClass(n,null,&quot;ui-state-active&quot;),t&amp;&amp;&quot;keydown&quot;===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(&quot;.ui-menu&quot;),i.length&amp;&amp;t&amp;&amp;/^mouse/.test(t.type)&amp;&amp;this._startOpening(i),this.activeMenu=e.parent(),this._trigger(&quot;focus&quot;,t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&amp;&amp;(i=parseFloat(t.css(this.activeMenu[0],&quot;borderTopWidth&quot;))||0,s=parseFloat(t.css(this.activeMenu[0],&quot;paddingTop&quot;))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0&gt;n?this.activeMenu.scrollTop(o+n):n+r&gt;a&amp;&amp;this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&amp;&amp;(this._removeClass(this.active.children(&quot;.ui-menu-item-wrapper&quot;),null,&quot;ui-state-active&quot;),this._trigger(&quot;blur&quot;,t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),&quot;true&quot;===t.attr(&quot;aria-hidden&quot;)&amp;&amp;(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(&quot;.ui-menu&quot;).not(e.parents(&quot;.ui-menu&quot;)).hide().attr(&quot;aria-hidden&quot;,&quot;true&quot;),e.show().removeAttr(&quot;aria-hidden&quot;).attr(&quot;aria-expanded&quot;,&quot;true&quot;).position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&amp;&amp;e.target).closest(this.element.find(&quot;.ui-menu&quot;));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(&quot;.ui-state-active&quot;),null,&quot;ui-state-active&quot;),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(&quot;.ui-menu&quot;).hide().attr(&quot;aria-hidden&quot;,&quot;true&quot;).attr(&quot;aria-expanded&quot;,&quot;false&quot;)},_closeOnDocumentClick:function(e){return!t(e.target).closest(&quot;.ui-menu&quot;).length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&amp;&amp;this.active.parent().closest(&quot;.ui-menu-item&quot;,this.element);e&amp;&amp;e.length&amp;&amp;(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&amp;&amp;this.active.children(&quot;.ui-menu &quot;).find(this.options.items).first();e&amp;&amp;e.length&amp;&amp;(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move(&quot;next&quot;,&quot;first&quot;,t)},previous:function(t){this._move(&quot;prev&quot;,&quot;last&quot;,t)},isFirstItem:function(){return this.active&amp;&amp;!this.active.prevAll(&quot;.ui-menu-item&quot;).length},isLastItem:function(){return this.active&amp;&amp;!this.active.nextAll(&quot;.ui-menu-item&quot;).length},_move:function(t,e,i){var s;this.active&amp;&amp;(s=&quot;first&quot;===t||&quot;last&quot;===t?this.active[&quot;first&quot;===t?&quot;prevAll&quot;:&quot;nextAll&quot;](&quot;.ui-menu-item&quot;).eq(-1):this.active[t+&quot;All&quot;](&quot;.ui-menu-item&quot;).eq(0)),s&amp;&amp;s.length&amp;&amp;this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(&quot;.ui-menu-item&quot;).each(function(){return i=t(this),0&gt;i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?&quot;last&quot;:&quot;first&quot;]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(&quot;.ui-menu-item&quot;).each(function(){return i=t(this),i.offset().top-s+n&gt;0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()&lt;this.element.prop(&quot;scrollHeight&quot;)},select:function(e){this.active=this.active||t(e.target).closest(&quot;.ui-menu-item&quot;);var i={item:this.active};this.active.has(&quot;.ui-menu&quot;).length||this.collapseAll(e,!0),this._trigger(&quot;select&quot;,e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,&quot;\\$&amp;&quot;),s=RegExp(&quot;^&quot;+i,&quot;i&quot;);return this.activeMenu.find(this.options.items).filter(&quot;.ui-menu-item&quot;).filter(function(){return s.test(t.trim(t(this).children(&quot;.ui-menu-item-wrapper&quot;).text()))})}}),t.widget(&quot;ui.autocomplete&quot;,{version:&quot;1.12.0&quot;,defaultElement:&quot;&lt;input&gt;&quot;,options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:&quot;left top&quot;,at:&quot;left bottom&quot;,collision:&quot;none&quot;},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o=&quot;textarea&quot;===n,a=&quot;input&quot;===n;this.isMultiLine=o||!a&amp;&amp;this._isContentEditable(this.element),this.valueMethod=this.element[o||a?&quot;val&quot;:&quot;text&quot;],this.isNewMenu=!0,this._addClass(&quot;ui-autocomplete-input&quot;),this.element.attr(&quot;autocomplete&quot;,&quot;off&quot;),this._on(this.element,{keydown:function(n){if(this.element.prop(&quot;readOnly&quot;))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move(&quot;previousPage&quot;,n);break;case o.PAGE_DOWN:e=!0,this._move(&quot;nextPage&quot;,n);break;case o.UP:e=!0,this._keyEvent(&quot;previous&quot;,n);break;case o.DOWN:e=!0,this._keyEvent(&quot;next&quot;,n);break;case o.ENTER:this.menu.active&amp;&amp;(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&amp;&amp;this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(&quot;:visible&quot;)&amp;&amp;(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(&quot;:visible&quot;))&amp;&amp;s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move(&quot;previousPage&quot;,s);break;case n.PAGE_DOWN:this._move(&quot;nextPage&quot;,s);break;case n.UP:this._keyEvent(&quot;previous&quot;,s);break;case n.DOWN:this._keyEvent(&quot;next&quot;,s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t(&quot;&lt;ul&gt;&quot;).appendTo(this._appendTo()).menu({role:null}).hide().menu(&quot;instance&quot;),this._addClass(this.menu.element,&quot;ui-autocomplete&quot;,&quot;ui-front&quot;),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&amp;&amp;this.element.trigger(&quot;focus&quot;)})},menufocus:function(e,i){var s,n;return this.isNewMenu&amp;&amp;(this.isNewMenu=!1,e.originalEvent&amp;&amp;/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one(&quot;mousemove&quot;,function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data(&quot;ui-autocomplete-item&quot;),!1!==this._trigger(&quot;focus&quot;,e,{item:n})&amp;&amp;e.originalEvent&amp;&amp;/^key/.test(e.originalEvent.type)&amp;&amp;this._value(n.value),s=i.item.attr(&quot;aria-label&quot;)||n.value,s&amp;&amp;t.trim(s).length&amp;&amp;(this.liveRegion.children().hide(),t(&quot;&lt;div&gt;&quot;).text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data(&quot;ui-autocomplete-item&quot;),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&amp;&amp;(this.element.trigger(&quot;focus&quot;),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger(&quot;select&quot;,e,{item:s})&amp;&amp;this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t(&quot;&lt;div&gt;&quot;,{role:&quot;status&quot;,&quot;aria-live&quot;:&quot;assertive&quot;,&quot;aria-relevant&quot;:&quot;additions&quot;}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,&quot;ui-helper-hidden-accessible&quot;),this._on(this.window,{beforeunload:function(){this.element.removeAttr(&quot;autocomplete&quot;)}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr(&quot;autocomplete&quot;),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),&quot;source&quot;===t&amp;&amp;this._initSource(),&quot;appendTo&quot;===t&amp;&amp;this.menu.element.appendTo(this._appendTo()),&quot;disabled&quot;===t&amp;&amp;e&amp;&amp;this.xhr&amp;&amp;this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&amp;&amp;(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&amp;&amp;e[0]||(e=this.element.closest(&quot;.ui-front, dialog&quot;)),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):&quot;string&quot;==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&amp;&amp;s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:&quot;json&quot;,success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(&quot;:visible&quot;),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&amp;&amp;!i&amp;&amp;!s)&amp;&amp;(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length&lt;this.options.minLength?this.close(e):this._trigger(&quot;search&quot;,e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass(&quot;ui-autocomplete-loading&quot;),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&amp;&amp;this.__response(t),this.pending--,this.pending||this._removeClass(&quot;ui-autocomplete-loading&quot;)},this)},__response:function(t){t&amp;&amp;(t=this._normalize(t)),this._trigger(&quot;response&quot;,null,{content:t}),!this.options.disabled&amp;&amp;t&amp;&amp;t.length&amp;&amp;!this.cancelSearch?(this._suggest(t),this._trigger(&quot;open&quot;)):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,&quot;mousedown&quot;),this.menu.element.is(&quot;:visible&quot;)&amp;&amp;(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger(&quot;close&quot;,t))},_change:function(t){this.previous!==this._value()&amp;&amp;this._trigger(&quot;change&quot;,t,{item:this.selectedItem})},_normalize:function(e){return e.length&amp;&amp;e[0].label&amp;&amp;e[0].value?e:t.map(e,function(e){return&quot;string&quot;==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&amp;&amp;this.menu.next(),this._on(this.document,{mousedown:&quot;_closeOnClickOutside&quot;})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width(&quot;&quot;).outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data(&quot;ui-autocomplete-item&quot;,e)},_renderItem:function(e,i){return t(&quot;&lt;li&gt;&quot;).append(t(&quot;&lt;div&gt;&quot;).text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(&quot;:visible&quot;)?this.menu.isFirstItem()&amp;&amp;/^previous/.test(t)||this.menu.isLastItem()&amp;&amp;/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(&quot;:visible&quot;))&amp;&amp;(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop(&quot;contentEditable&quot;);return&quot;inherit&quot;===e?this._isContentEditable(t.parent()):&quot;true&quot;===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,&quot;\\$&amp;&quot;)},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),&quot;i&quot;);return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget(&quot;ui.autocomplete&quot;,t.ui.autocomplete,{options:{messages:{noResults:&quot;No search results.&quot;,results:function(t){return t+(t&gt;1?&quot; results are&quot;:&quot; result is&quot;)+&quot; available, use up and down arrow keys to navigate.&quot;}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&amp;&amp;e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t(&quot;&lt;div&gt;&quot;).text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var s=&quot;ui-effects-&quot;,n=&quot;ui-effects-style&quot;,o=&quot;ui-effects-animated&quot;,a=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0&gt;t?0:t&gt;s.max?s.max:t)</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,o){var a,r=o.re.exec(i),l=r&amp;&amp;o.parse(r),h=o.space||&quot;rgba&quot;;return l?(a=s[h](l),s[c[h].cache]=a[c[h].cache],n=s._rgba=a._rgba,!1):e}),n.length?(&quot;0,0,0,0&quot;===n.join()&amp;&amp;t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1&gt;6*i?t+6*(e-t)*i:1&gt;2*i?e:2&gt;3*i?t+6*(e-t)*(2/3-i):t}var o,a=&quot;backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor&quot;,r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:&quot;hsla&quot;,parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:&quot;byte&quot;},green:{idx:1,type:&quot;byte&quot;},blue:{idx:2,type:&quot;byte&quot;}}},hsla:{props:{hue:{idx:0,type:&quot;degrees&quot;},saturation:{idx:1,type:&quot;percent&quot;},lightness:{idx:2,type:&quot;percent&quot;}}}},u={&quot;byte&quot;:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t(&quot;&lt;p&gt;&quot;)[0],f=t.each;p.style.cssText=&quot;background-color:rgba(1,1,1,.5)&quot;,d.rgba=p.style.backgroundColor.indexOf(&quot;rgba&quot;)&gt;-1,f(c,function(t,e){e.cache=&quot;_&quot;+t,e.props.alpha={idx:3,type:&quot;percent&quot;,def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,a,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&amp;&amp;(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&amp;&amp;(n=[n,a,r,l],d=&quot;array&quot;),&quot;string&quot;===d?this.parse(s(n)||o._default):&quot;array&quot;===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):&quot;object&quot;===d?(n instanceof h?f(c,function(t,e){n[e.cache]&amp;&amp;(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&amp;&amp;s.to){if(&quot;alpha&quot;===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&amp;&amp;0&gt;t.inArray(null,u[o].slice(0,3))&amp;&amp;(u[o][3]=1,s.from&amp;&amp;(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&amp;&amp;(a=n[o.cache]||o.to&amp;&amp;o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&amp;&amp;t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),o=c[n],a=0===this.alpha()?h(&quot;transparent&quot;):this,r=a[o.cache]||o.to(a._rgba),l=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],h=s[o],c=u[n.type]||{};null!==h&amp;&amp;(null===a?l[o]=h:(c.mod&amp;&amp;(h-a&gt;c.mod/2?a+=c.mod:a-h&gt;c.mod/2&amp;&amp;(a-=c.mod)),l[o]=i((h-a)*e+a,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e=&quot;rgba(&quot;,i=t.map(this._rgba,function(t,e){return null==t?e&gt;2?1:0:t});return 1===i[3]&amp;&amp;(i.pop(),e=&quot;rgb(&quot;),e+i.join()+&quot;)&quot;},toHslaString:function(){var e=&quot;hsla(&quot;,i=t.map(this.hsla(),function(t,e){return null==t&amp;&amp;(t=e&gt;2?1:0),e&amp;&amp;3&gt;e&amp;&amp;(t=Math.round(100*t)+&quot;%&quot;),t});return 1===i[3]&amp;&amp;(i.pop(),e=&quot;hsl(&quot;),e+i.join()+&quot;)&quot;},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&amp;&amp;i.push(~~(255*s)),&quot;#&quot;+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?&quot;0&quot;+t:t}).join(&quot;&quot;)},toString:function(){return 0===this._rgba[3]?&quot;transparent&quot;:this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),l=Math.min(s,n,o),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-o)/h+360:n===r?60*(o-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5&gt;=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5&gt;=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&amp;&amp;!this[a]&amp;&amp;(this[a]=l(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u=&quot;array&quot;===r||&quot;object&quot;===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u[&quot;object&quot;===r?t:e.idx];null==s&amp;&amp;(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[a]=d,n):h(d)},f(o,function(e,i){h.fn[e]||(h.fn[e]=function(n){var o,a=t.type(n),l=&quot;alpha&quot;===e?this._hsla?&quot;hsla&quot;:&quot;rgba&quot;:s,h=this[l](),c=h[i.idx];return&quot;undefined&quot;===a?c:(&quot;function&quot;===a&amp;&amp;(n=n.call(this,c),a=t.type(n)),null==n&amp;&amp;i.empty?this:(&quot;string&quot;===a&amp;&amp;(o=r.exec(n),o&amp;&amp;(n=c+parseFloat(o[2])*(&quot;+&quot;===o[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(&quot; &quot;);f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r=&quot;&quot;;if(&quot;transparent&quot;!==n&amp;&amp;(&quot;string&quot;!==t.type(n)||(o=s(n)))){if(n=h(o||n),!d.rgba&amp;&amp;1!==n._rgba[3]){for(a=&quot;backgroundColor&quot;===i?e.parentNode:e;(&quot;&quot;===r||&quot;transparent&quot;===r)&amp;&amp;a&amp;&amp;a.style;)try{r=t.css(a,&quot;backgroundColor&quot;),a=a.parentNode}catch(l){}n=n.blend(r&amp;&amp;&quot;transparent&quot;!==r?r:&quot;_default&quot;)}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f([&quot;Top&quot;,&quot;Right&quot;,&quot;Bottom&quot;,&quot;Left&quot;],function(i,s){e[&quot;border&quot;+s+&quot;Color&quot;]=t}),e}},o=t.Color.names={aqua:&quot;#00ffff&quot;,black:&quot;#000000&quot;,blue:&quot;#0000ff&quot;,fuchsia:&quot;#ff00ff&quot;,gray:&quot;#808080&quot;,green:&quot;#008000&quot;,lime:&quot;#00ff00&quot;,maroon:&quot;#800000&quot;,navy:&quot;#000080&quot;,olive:&quot;#808000&quot;,purple:&quot;#800080&quot;,red:&quot;#ff0000&quot;,silver:&quot;#c0c0c0&quot;,teal:&quot;#008080&quot;,white:&quot;#ffffff&quot;,yellow:&quot;#ffff00&quot;,transparent:[null,null,null,0],_default:&quot;#ffffff&quot;}}(a),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&amp;&amp;n.length&amp;&amp;n[0]&amp;&amp;n[n[0]])for(s=n.length;s--;)i=n[s],&quot;string&quot;==typeof n[i]&amp;&amp;(o[t.camelCase(i)]=n[i]);else for(i in n)&quot;string&quot;==typeof n[i]&amp;&amp;(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&amp;&amp;(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&amp;&amp;(a[s]=o));return a}var s=[&quot;add&quot;,&quot;remove&quot;,&quot;toggle&quot;],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each([&quot;borderLeftStyle&quot;,&quot;borderRightStyle&quot;,&quot;borderBottomStyle&quot;,&quot;borderTopStyle&quot;],function(e,i){t.fx.step[i]=function(t){(&quot;none&quot;!==t.end&amp;&amp;!t.setAttr||1===t.pos&amp;&amp;!t.setAttr)&amp;&amp;(a.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var l=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr(&quot;class&quot;)||&quot;&quot;,h=l.children?a.find(&quot;*&quot;).addBack():a;h=h.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&amp;&amp;a[e+&quot;Class&quot;](n[e])})},o(),h=h.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr(&quot;class&quot;,r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,&quot;&quot;)})}),l.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length&gt;1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return&quot;boolean&quot;==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&amp;&amp;(i=e,e=e.effect),e={effect:e},null==i&amp;&amp;(i={}),t.isFunction(i)&amp;&amp;(n=i,s=null,i={}),(&quot;number&quot;==typeof i||t.fx.speeds[i])&amp;&amp;(n=s,s=i,i={}),t.isFunction(s)&amp;&amp;(n=s,s=null),i&amp;&amp;t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:&quot;number&quot;==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||&quot;number&quot;==typeof e||t.fx.speeds[e]?!0:&quot;string&quot;!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:&quot;object&quot;!=typeof e||e.effect?!1:!0:!0}function a(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||[&quot;&quot;,0,i,s,0];return{top:parseFloat(o[1])||0,right:&quot;auto&quot;===o[2]?i:parseFloat(o[2]),bottom:&quot;auto&quot;===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&amp;&amp;t.expr.filters&amp;&amp;t.expr.filters.animated&amp;&amp;(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(o)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&amp;&amp;t.extend(t.effects,{save:function(t,e){for(var i=0,n=e.length;n&gt;i;i++)null!==e[i]&amp;&amp;t.data(s+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,n=0,o=e.length;o&gt;n;n++)null!==e[n]&amp;&amp;(i=t.data(s+e[n]),t.css(e[n],i))},setMode:function(t,e){return&quot;toggle&quot;===e&amp;&amp;(e=t.is(&quot;:hidden&quot;)?&quot;show&quot;:&quot;hide&quot;),e},createWrapper:function(e){if(e.parent().is(&quot;.ui-effects-wrapper&quot;))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),&quot;float&quot;:e.css(&quot;float&quot;)},s=t(&quot;&lt;div&gt;&lt;/div&gt;&quot;).addClass(&quot;ui-effects-wrapper&quot;).css({fontSize:&quot;100%&quot;,background:&quot;transparent&quot;,border:&quot;none&quot;,margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&amp;&amp;t(o).trigger(&quot;focus&quot;),s=e.parent(),&quot;static&quot;===e.css(&quot;position&quot;)?(s.css({position:&quot;relative&quot;}),e.css({position:&quot;relative&quot;})):(t.extend(i,{position:e.css(&quot;position&quot;),zIndex:e.css(&quot;z-index&quot;)}),t.each([&quot;top&quot;,&quot;left&quot;,&quot;bottom&quot;,&quot;right&quot;],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&amp;&amp;(i[s]=&quot;auto&quot;)}),e.css({position:&quot;relative&quot;,top:0,left:0,right:&quot;auto&quot;,bottom:&quot;auto&quot;})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(&quot;.ui-effects-wrapper&quot;)&amp;&amp;(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&amp;&amp;t(i).trigger(&quot;focus&quot;)),e}}),t.extend(t.effects,{version:&quot;1.12.0&quot;,define:function(e,i,s){return s||(s=i,i=&quot;effect&quot;),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s=&quot;horizontal&quot;!==i?(e||100)/100:1,n=&quot;vertical&quot;!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e&gt;1&amp;&amp;s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(n,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(n)||&quot;&quot;,t.removeData(n)},mode:function(t,e){var i=t.is(&quot;:hidden&quot;);return&quot;toggle&quot;===e&amp;&amp;(e=i?&quot;show&quot;:&quot;hide&quot;),(i?&quot;hide&quot;===e:&quot;show&quot;===e)&amp;&amp;(e=&quot;none&quot;),e},getBaseline:function(t,e){var i,s;switch(t[0]){case&quot;top&quot;:i=0;break;case&quot;middle&quot;:i=.5;break;case&quot;bottom&quot;:i=1;break;default:i=t[0]/e.height}switch(t[1]){case&quot;left&quot;:s=0;break;case&quot;center&quot;:s=.5;break;case&quot;right&quot;:s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,n=e.css(&quot;position&quot;),o=e.position();return e.css({marginTop:e.css(&quot;marginTop&quot;),marginBottom:e.css(&quot;marginBottom&quot;),marginLeft:e.css(&quot;marginLeft&quot;),marginRight:e.css(&quot;marginRight&quot;)}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(n)&amp;&amp;(n=&quot;absolute&quot;,i=t(&quot;&lt;&quot;+e[0].nodeName+&quot;&gt;&quot;).insertAfter(e).css({display:/^(inline|ruby)/.test(e.css(&quot;display&quot;))?&quot;inline-block&quot;:&quot;block&quot;,visibility:&quot;hidden&quot;,marginTop:e.css(&quot;marginTop&quot;),marginBottom:e.css(&quot;marginBottom&quot;),marginLeft:e.css(&quot;marginLeft&quot;),marginRight:e.css(&quot;marginRight&quot;),&quot;float&quot;:e.css(&quot;float&quot;)}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass(&quot;ui-effects-placeholder&quot;),e.data(s+&quot;placeholder&quot;,i)),e.css({position:n,left:o.left,top:o.top}),i},removePlaceholder:function(t){var e=s+&quot;placeholder&quot;,i=t.data(e);i&amp;&amp;(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]&gt;0&amp;&amp;(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){l.removeData(o),t.effects.cleanUp(l),&quot;hide&quot;===s.mode&amp;&amp;l.hide(),r()}function r(){t.isFunction(h)&amp;&amp;h.call(l[0]),t.isFunction(e)&amp;&amp;e()}var l=t(this);s.mode=u.shift(),t.uiBackCompat===!1||a?&quot;none&quot;===s.mode?(l[c](),r()):n.call(l[0],s,i):(l.is(&quot;:hidden&quot;)?&quot;hide&quot;===c:&quot;show&quot;===c)?(l[c](),r()):n.call(l[0],s,r)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],a=n.mode,r=s.queue,l=r||&quot;fx&quot;,h=s.complete,c=s.mode,u=[],d=function(e){var i=t(this),s=t.effects.mode(i,c)||a;i.data(o,!0),u.push(s),a&amp;&amp;(&quot;show&quot;===s||s===a&amp;&amp;&quot;hide&quot;===s)&amp;&amp;i.show(),a&amp;&amp;&quot;none&quot;===s||t.effects.saveStyle(i),t.isFunction(e)&amp;&amp;e()};return t.fx.off||!n?c?this[c](s.duration,h):this.each(function(){h&amp;&amp;h.call(this)}):r===!1?this.each(d).each(i):this.queue(l,d).queue(l,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode=&quot;show&quot;,this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode=&quot;hide&quot;,this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||&quot;boolean&quot;==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode=&quot;toggle&quot;,this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each([&quot;em&quot;,&quot;px&quot;,&quot;%&quot;,&quot;pt&quot;],function(t,e){i.indexOf(e)&gt;0&amp;&amp;(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css(&quot;clip&quot;,&quot;rect(&quot;+t.top+&quot;px &quot;+t.right+&quot;px &quot;+t.bottom+&quot;px &quot;+t.left+&quot;px)&quot;):a(this.css(&quot;clip&quot;),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o=&quot;fixed&quot;===n.css(&quot;position&quot;),a=t(&quot;body&quot;),r=o?a.scrollTop():0,l=o?a.scrollLeft():0,h=n.offset(),c={top:h.top-r,left:h.left-l,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t(&quot;&lt;div class=&#39;ui-effects-transfer&#39;&gt;&lt;/div&gt;&quot;).appendTo(&quot;body&quot;).addClass(e.className).css({top:u.top-r,left:u.left-l,height:s.innerHeight(),width:s.innerWidth(),position:o?&quot;fixed&quot;:&quot;absolute&quot;}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&amp;&amp;i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),&quot;string&quot;==typeof e.end&amp;&amp;(e.end=a(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each([&quot;Quad&quot;,&quot;Cubic&quot;,&quot;Quart&quot;,&quot;Quint&quot;,&quot;Expo&quot;],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11&gt;t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing[&quot;easeIn&quot;+e]=i,t.easing[&quot;easeOut&quot;+e]=function(t){return 1-i(1-t)},t.easing[&quot;easeInOut&quot;+e]=function(t){return.5&gt;t?i(2*t)/2:1-i(-2*t+2)/2}})}();var r=t.effects;t.effects.define(&quot;blind&quot;,&quot;hide&quot;,function(e,i){var s={up:[&quot;bottom&quot;,&quot;top&quot;],vertical:[&quot;bottom&quot;,&quot;top&quot;],down:[&quot;top&quot;,&quot;bottom&quot;],left:[&quot;right&quot;,&quot;left&quot;],horizontal:[&quot;right&quot;,&quot;left&quot;],right:[&quot;left&quot;,&quot;right&quot;]},n=t(this),o=e.direction||&quot;up&quot;,a=n.cssClip(),r={clip:t.extend({},a)},l=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],&quot;show&quot;===e.mode&amp;&amp;(n.cssClip(r.clip),l&amp;&amp;l.css(t.effects.clipToBox(r)),r.clip=a),l&amp;&amp;l.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define(&quot;bounce&quot;,function(e,i){var s,n,o,a=t(this),r=e.mode,l=&quot;hide&quot;===r,h=&quot;show&quot;===r,c=e.direction||&quot;up&quot;,u=e.distance,d=e.times||5,p=2*d+(h||l?1:0),f=e.duration/p,g=e.easing,m=&quot;up&quot;===c||&quot;down&quot;===c?&quot;top&quot;:&quot;left&quot;,_=&quot;up&quot;===c||&quot;left&quot;===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a[&quot;top&quot;===m?&quot;outerHeight&quot;:&quot;outerWidth&quot;]()/3),h&amp;&amp;(n={opacity:1},n[m]=o,a.css(&quot;opacity&quot;,0).css(m,_?2*-u:2*u).animate(n,f,g)),l&amp;&amp;(u/=Math.pow(2,d-1)),n={},n[m]=o;d&gt;v;v++)s={},s[m]=(_?&quot;-=&quot;:&quot;+=&quot;)+u,a.animate(s,f,g).animate(n,f,g),u=l?2*u:u/2;l&amp;&amp;(s={opacity:0},s[m]=(_?&quot;-=&quot;:&quot;+=&quot;)+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define(&quot;clip&quot;,&quot;hide&quot;,function(e,i){var s,n={},o=t(this),a=e.direction||&quot;vertical&quot;,r=&quot;both&quot;===a,l=r||&quot;horizontal&quot;===a,h=r||&quot;vertical&quot;===a;s=o.cssClip(),n.clip={top:h?(s.bottom-s.top)/2:s.top,right:l?(s.right-s.left)/2:s.right,bottom:h?(s.bottom-s.top)/2:s.bottom,left:l?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),&quot;show&quot;===e.mode&amp;&amp;(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define(&quot;drop&quot;,&quot;hide&quot;,function(e,i){var s,n=t(this),o=e.mode,a=&quot;show&quot;===o,r=e.direction||&quot;left&quot;,l=&quot;up&quot;===r||&quot;down&quot;===r?&quot;top&quot;:&quot;left&quot;,h=&quot;up&quot;===r||&quot;left&quot;===r?&quot;-=&quot;:&quot;+=&quot;,c=&quot;+=&quot;===h?&quot;-=&quot;:&quot;+=&quot;,u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n[&quot;top&quot;===l?&quot;outerHeight&quot;:&quot;outerWidth&quot;](!0)/2,u[l]=h+s,a&amp;&amp;(n.css(u),u[l]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define(&quot;explode&quot;,&quot;hide&quot;,function(e,i){function s(){b.push(this),b.length===u*d&amp;&amp;n()}function n(){p.css({visibility:&quot;visible&quot;}),t(b).remove(),i()}var o,a,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g=&quot;show&quot;===f,m=p.show().css(&quot;visibility&quot;,&quot;hidden&quot;).offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u&gt;o;o++)for(l=m.top+o*v,c=o-(u-1)/2,a=0;d&gt;a;a++)r=m.left+a*_,h=a-(d-1)/2,p.clone().appendTo(&quot;body&quot;).wrap(&quot;&lt;div&gt;&lt;/div&gt;&quot;).css({position:&quot;absolute&quot;,visibility:&quot;visible&quot;,left:-a*_,top:-o*v}).parent().addClass(&quot;ui-effects-explode&quot;).css({position:&quot;absolute&quot;,overflow:&quot;hidden&quot;,width:_,height:v,left:r+(g?h*_:0),top:l+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:h*_),top:l+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define(&quot;fade&quot;,&quot;toggle&quot;,function(e,i){var s=&quot;show&quot;===e.mode;t(this).css(&quot;opacity&quot;,s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define(&quot;fold&quot;,&quot;hide&quot;,function(e,i){var s=t(this),n=e.mode,o=&quot;show&quot;===n,a=&quot;hide&quot;===n,r=e.size||15,l=/([0-9]+)%/.exec(r),h=!!e.horizFirst,c=h?[&quot;right&quot;,&quot;bottom&quot;]:[&quot;bottom&quot;,&quot;right&quot;],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;l&amp;&amp;(r=parseInt(l[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&amp;&amp;(s.cssClip(g.clip),d&amp;&amp;d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&amp;&amp;d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define(&quot;highlight&quot;,&quot;show&quot;,function(e,i){var s=t(this),n={backgroundColor:s.css(&quot;backgroundColor&quot;)};&quot;hide&quot;===e.mode&amp;&amp;(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:&quot;none&quot;,backgroundColor:e.color||&quot;#ffff99&quot;}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define(&quot;size&quot;,function(e,i){var s,n,o,a=t(this),r=[&quot;fontSize&quot;],l=[&quot;borderTopWidth&quot;,&quot;borderBottomWidth&quot;,&quot;paddingTop&quot;,&quot;paddingBottom&quot;],h=[&quot;borderLeftWidth&quot;,&quot;borderRightWidth&quot;,&quot;paddingLeft&quot;,&quot;paddingRight&quot;],c=e.mode,u=&quot;effect&quot;!==c,d=e.scale||&quot;both&quot;,p=e.origin||[&quot;middle&quot;,&quot;center&quot;],f=a.css(&quot;position&quot;),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),&quot;show&quot;===c&amp;&amp;(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},(&quot;box&quot;===d||&quot;both&quot;===d)&amp;&amp;(n.from.y!==n.to.y&amp;&amp;(_=t.effects.setTransition(a,l,n.from.y,_),v=t.effects.setTransition(a,l,n.to.y,v)),n.from.x!==n.to.x&amp;&amp;(_=t.effects.setTransition(a,h,n.from.x,_),v=t.effects.setTransition(a,h,n.to.x,v))),(&quot;content&quot;===d||&quot;both&quot;===d)&amp;&amp;n.from.y!==n.to.y&amp;&amp;(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&amp;&amp;(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),(&quot;content&quot;===d||&quot;both&quot;===d)&amp;&amp;(l=l.concat([&quot;marginTop&quot;,&quot;marginBottom&quot;]).concat(r),h=h.concat([&quot;marginLeft&quot;,&quot;marginRight&quot;]),a.find(&quot;*[width]&quot;).each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&amp;&amp;(o=t.effects.setTransition(i,l,n.from.y,o),a=t.effects.setTransition(i,l,n.to.y,a)),n.from.x!==n.to.x&amp;&amp;(o=t.effects.setTransition(i,h,n.from.x,o),a=t.effects.setTransition(i,h,n.to.x,a)),u&amp;&amp;t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&amp;&amp;t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&amp;&amp;a.css(&quot;opacity&quot;,_.opacity),u||(a.css(&quot;position&quot;,&quot;static&quot;===f?&quot;relative&quot;:f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define(&quot;scale&quot;,function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:&quot;effect&quot;!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||&quot;both&quot;),origin:e.origin||[&quot;middle&quot;,&quot;center&quot;]},e);e.fade&amp;&amp;(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define(&quot;puff&quot;,&quot;hide&quot;,function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define(&quot;pulsate&quot;,&quot;show&quot;,function(e,i){var s=t(this),n=e.mode,o=&quot;show&quot;===n,a=&quot;hide&quot;===n,r=o||a,l=2*(e.times||5)+(r?1:0),h=e.duration/l,c=0,u=1,d=s.queue().length;for((o||!s.is(&quot;:visible&quot;))&amp;&amp;(s.css(&quot;opacity&quot;,0).show(),c=1);l&gt;u;u++)s.animate({opacity:c},h,e.easing),c=1-c;s.animate({opacity:c},h,e.easing),s.queue(i),t.effects.unshift(s,d,l+1)}),t.effects.define(&quot;shake&quot;,function(e,i){var s=1,n=t(this),o=e.direction||&quot;left&quot;,a=e.distance||20,r=e.times||3,l=2*r+1,h=Math.round(e.duration/l),c=&quot;up&quot;===o||&quot;down&quot;===o?&quot;top&quot;:&quot;left&quot;,u=&quot;up&quot;===o||&quot;left&quot;===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?&quot;-=&quot;:&quot;+=&quot;)+a,p[c]=(u?&quot;+=&quot;:&quot;-=&quot;)+2*a,f[c]=(u?&quot;-=&quot;:&quot;+=&quot;)+2*a,n.animate(d,h,e.easing);r&gt;s;s++)n.animate(p,h,e.easing).animate(f,h,e.easing);n.animate(p,h,e.easing).animate(d,h/2,e.easing).queue(i),t.effects.unshift(n,g,l+1)}),t.effects.define(&quot;slide&quot;,&quot;show&quot;,function(e,i){var s,n,o=t(this),a={up:[&quot;bottom&quot;,&quot;top&quot;],down:[&quot;top&quot;,&quot;bottom&quot;],left:[&quot;right&quot;,&quot;left&quot;],right:[&quot;left&quot;,&quot;right&quot;]},r=e.mode,l=e.direction||&quot;left&quot;,h=&quot;up&quot;===l||&quot;down&quot;===l?&quot;top&quot;:&quot;left&quot;,c=&quot;up&quot;===l||&quot;left&quot;===l,u=e.distance||o[&quot;top&quot;===h?&quot;outerHeight&quot;:&quot;outerWidth&quot;](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[h],d[h]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[l][1]]=d.clip[a[l][0]],&quot;show&quot;===r&amp;&amp;(o.cssClip(d.clip),o.css(h,d[h]),d.clip=s,d[h]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var r;t.uiBackCompat!==!1&amp;&amp;(r=t.effects.define(&quot;transfer&quot;,function(e,i){t(this).transfer(e,i)}))});</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/omar-nema/portfolio-old/blame/5d932188023162266fd85deafa8333966ecb3908/_site/assets/scripts/projects/jqueryui.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/omar-nema/portfolio-old/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/omar-nema/portfolio-old/find-symbols"
     data-tagsearch-ref="master"
     data-tagsearch-path="_site/assets/scripts/projects/jqueryui.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:150660903,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;client_id&quot;:&quot;1493853002.1559829673&quot;,&quot;originating_request_id&quot;:&quot;F63A:44D2:E32F10:1BA68B0:5DBB4DDF&quot;,&quot;originating_url&quot;:&quot;https://github.com/omar-nema/portfolio-old/blob/master/_site/assets/scripts/projects/jqueryui.js&quot;,&quot;referrer&quot;:&quot;https://github.com/omar-nema/portfolio-old/tree/master/_site/assets/scripts/projects&quot;,&quot;user_id&quot;:19559239}}"
     data-hydro-click-hmac="0e6a6ed3667d1ae26de7a1efa3dcd3352c56da7402a67b8b4e0cefe780c90be7">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.55255s from unicorn-67f67f6d48-mkwbm">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-6YViILnwzc+BS7C5V4Mjp//K/m1vY/fN7zZRwaMau9nhKRgQcZmhBA+eAlTBdEpdmfaV0v5dHzn65lPymBbGcg==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-c1569574.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-elZDJOMln9nCLt7UxSPb0mP6TRpH+AjS569lsPMfIdt3XGELvINFqj4wTjEUGwOA1W0rbnyeNsi8WzPmqBAJZQ==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-b6938541.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

