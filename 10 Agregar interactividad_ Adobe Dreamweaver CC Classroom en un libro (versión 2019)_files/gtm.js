
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"321",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",5],8,16],".split(\"\/\").length\u0026\u0026!",["escape",["macro",5],8,16],".endsWith(\".html\")){if(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",6],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",5],8,16],"+\"\/?\"+",["escape",["macro",6],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",6],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",5],8,16],"+\"\/\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",11],8,16],";switch(a){case \"start\":return\"play\";case \"progress\":return\"\"+",["escape",["macro",12],8,16],"+\"%\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",14],8,16],";if(\"profile icon\"==",["escape",["macro",15],8,16],"\u0026\u0026\"hover\"==",["escape",["macro",16],8,16],"||\"global\"==",["escape",["macro",15],8,16],"\u0026\u0026\"navigation\"==",["escape",["macro",16],8,16],"\u0026\u0026\"your oreilly|hover\"==",["escape",["macro",17],8,16],")a=1;return a})();"]
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",6],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIdentifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)|^.*conferences.oreilly.com\\\/(strata\\-data\\-ai($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"],["map","key","^.*conferences.oreilly.com\\\/(infrastructure-ops($|\\\/|\\?).*)","value","UA-112091926-13"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",24]],["map","index","1","group",["macro",25]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",26]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",27]],["map","index","2","dimension",["macro",28]],["map","index","3","dimension",["macro",24]],["map","index","4","dimension",["macro",29]],["map","index","5","dimension",["macro",30]],["map","index","6","dimension",["macro",26]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",37],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sectionName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsorName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orgID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"topicSearchValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSuggestGroup"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)(get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com|learning.oreilly.com|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com)(.*)","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",35]],["map","index","4","group",["macro",36]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",9],
      "vtp_cookieDomain":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",7]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",26]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",38]],["map","index","2","dimension",["macro",39]],["map","index","4","dimension",["macro",40]],["map","index","9","dimension",["macro",41]],["map","index","10","dimension",["macro",42]],["map","index","11","dimension",["macro",43]],["map","index","12","dimension",["macro",44]],["map","index","13","dimension",["macro",36]],["map","index","14","dimension",["macro",45]],["map","index","15","dimension",["macro",46]],["map","index","16","dimension",["macro",47]],["map","index","17","dimension",["macro",48]],["map","index","18","dimension",["macro",35]],["map","index","19","dimension",["macro",49]],["map","index","20","dimension",["macro",50]],["map","index","21","dimension",["macro",51]],["map","index","27","dimension",["macro",52]],["map","index","22","dimension",["macro",30]],["map","index","6","dimension",["macro",53]],["map","index","7","dimension",["macro",54]],["map","index","8","dimension",["macro",55]],["map","index","25","dimension",["macro",56]],["map","index","26","dimension",["macro",57]],["map","index","23","dimension",["macro",58]],["map","index","24","dimension",["macro",59]],["map","index","28","dimension",["macro",60]],["map","index","30","dimension",["macro",61]],["map","index","29","dimension",["macro",62]],["map","index","31","dimension",["macro",63]],["map","index","32","dimension",["macro",64]],["map","index","33","dimension",["macro",26]],["map","index","34","dimension",["macro",65]],["map","index","36","dimension",["macro",66]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"Campaign-170"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*databases.*|.*conferences.oreilly.com.*databases.*","value","true"],["map","key",".*www.oreilly.com.*analytics.*|.*conferences.oreilly.com.*analytics.*","value","true"],["map","key",".*www.oreilly.com.*data-show-podcasts.*|.*conferences.oreilly.com.*data-show-podcasts.*","value","true"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Revenue"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",6],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*artificial-intelligence.*|.*conferences.oreilly.com.*artificial-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*GANS.*|.*conferences.oreilly.com.*GANS.*","value","true"],["map","key",".*www.oreilly.com.*NLP.*|.*conferences.oreilly.com.*NLP.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*NSTM.*|.*conferences.oreilly.com.*NSTM.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",11],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",12]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*bots.*|.*conferences.oreilly.com.*bots.*","value","true"],["map","key",".*www.oreilly.com.*agents.*|.*conferences.oreilly.com.*agents.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*open-source.*|.*conferences.oreilly.com.*open-source.*","value","true"],["map","key",".*www.oreilly.com.*cloud-native.*|.*conferences.oreilly.com.*cloud-native.*","value","true"],["map","key",".*www.oreilly.com.*software-development.*|.*conferences.oreilly.com.*software-development.*","value","true"],["map","key",".*www.oreilly.com.*blockchain.*|.*conferences.oreilly.com.*blockchain.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*tensorflow.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*data-mining.*","value","true"],["map","key",".*unsupervised-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*machine-learning.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",6],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/resources","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderID"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",20],
      "vtp_enableRdpCheckbox":false,
      "tag_id":32
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"tfRcCMnwwHQQk4a4jwM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",20],
      "vtp_enableRdpCheckbox":false,
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":39
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",14],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",33],
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",32],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",34]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]],["map","fieldName","title","value",["macro",34]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",68],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",18],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",33],
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",68],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",68],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":68
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",68],
      "vtp_eventAction":["template",["macro",71],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",20],
      "vtp_enableRdpCheckbox":false,
      "tag_id":130
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"773515308",
      "vtp_conversionLabel":"3NkcCNrj2ZMBEKzQ6_AC",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":133
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":162
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video plays",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",68],
      "vtp_eventAction":["macro",13],
      "vtp_eventLabel":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":293
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",14],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventValue":["macro",33],
      "vtp_eventCategory":["macro",15],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",68],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":294
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",72],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"k3B8CNWP_awBELOysOID",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":297
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"1011620147",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"k3B8CNWP_awBELOysOID",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",20],
      "vtp_enableRdpCheckbox":false,
      "tag_id":725
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Custom",
      "vtp_dimension":["list",["map","index","35","dimension",["macro",73]]],
      "vtp_trackingId":"UA-112091926-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":726
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",72],
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1011620147",
      "vtp_conversionLabel":"ytHKCKe9wboBELOysOID",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":755
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",6],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":759
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":760
    },{
      "function":"__cl",
      "tag_id":761
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":762
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":763
    },{
      "function":"__hl",
      "tag_id":764
    },{
      "function":"__hl",
      "tag_id":765
    },{
      "function":"__hl",
      "tag_id":766
    },{
      "function":"__cl",
      "tag_id":767
    },{
      "function":"__cl",
      "tag_id":768
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"input[name='promotionCode']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1064",
      "tag_id":769
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.orm-ff-NavigationWidget-navigationWidgetContainer",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1106",
      "tag_id":770
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId=2775\u0026amp;ITEM1=Safari-Subscription\u0026amp;AMT1=",["escape",["macro",22],12],"\u0026amp;QTY1=1\u0026amp;CID=1525054\u0026amp;OID=",["escape",["macro",74],12],"\u0026amp;TYPE=",["escape",["macro",75],12],"\u0026amp;CURRENCY=",["escape",["macro",76],12],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SafariSubscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;if(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",5],8,16],".split(\"\/\")[1]}else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"\",isSubDomainTracker=!0,isSeparateDomainTracker=!0,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",action:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",\nlabel:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];\nmainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0;if(!isExcluded(arr[i])){var mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(b){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}}function _isSocial(b){return\"\"!=socSites?null!=b.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(b){return\"\"!=folders_to_track?null!=b.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(b){for(var c=0,a=0;a\u003CextDoc.length;a++){var d=b.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[a])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(b,c){var a=b.toLowerCase().split(\".\");a=a[a.length-1].split(\/[#?\u0026?]\/);var d=b.toLowerCase().split(c);d=d[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=a;eValues.downloads.label=eValues.outbound_downloads.label=d}\nfunction _tagLinks(b,c,a,d,g,e,f){isGTM?b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+a+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+a+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(b){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var a=b.parentNode;null!=a;){if(a==c)return!0;a=a.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;a=\/((.*)oreilly.com\\\/(learning|radar|idea)(.*))\/i;return c.test(b.href)\u0026\u0026a.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(b).parents(\".article-body\").length||\njQuery(b).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar checkin=new Date,checkout=new Date;checkin.setDate((new Date).getDate()+10);checkout.setDate((new Date).getDate()+24);\nvar trialends=(1==(checkin.getMonth()+1).toString().length?\"0\"+(checkin.getMonth()+1):checkin.getMonth()+1)+\"\/\"+(1==checkin.getDate().toString().length?\"0\"+checkin.getDate():checkin.getDate())+\"\/\"+checkin.getFullYear(),trialends2=(1==(checkout.getMonth()+1).toString().length?\"0\"+(checkout.getMonth()+1):checkout.getMonth()+1)+\"\/\"+(1==checkout.getDate().toString().length?\"0\"+checkout.getDate():checkout.getDate())+\"\/\"+checkout.getFullYear();window.criteo_q=window.criteo_q||[];\nvar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";\nwindow.criteo_q.push({event:\"manualFlush\"},{event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"},function(){setTimeout(function(){criteo_q.push({event:\"viewSearch\",din:trialends,dout:trialends2},{event:\"viewHome\"},{event:\"setData\",trialends:trialends},{event:\"flushEvents\"})},1E3)});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"##user_email##\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"##subscription_cost##\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",44],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}if(null!==document.querySelector(\"iframe.twitter-share-button\")\u0026\u0026void 0!==document.querySelector(\"iframe.twitter-share-button\")){var b=!1;window.addEventListener(\"blur\",function(){b\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0})});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseover\",\nfunction(){window.focus();b=!0});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseout\",function(){b=!1})}try{window.twttr=function(a,b,d){var c,e=a.getElementsByTagName(b)[0];if(!a.getElementById(d))return a=a.createElement(b),a.id=d,a.src=\"\/\/platform.twitter.com\/widgets.js\",e.parentNode.insertBefore(a,e),window.twttr||(c={_e:[],ready:function(a){c._e.push(a)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(a){a.events.bind(\"tweet\",trackTwitter)})}catch(c){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,b){if(a\u0026\u0026(b=new RegExp(\"[\\\\?\\x26#]\"+b+\"\\x3d([^\\x26#]*)\"),a=b.exec(a),null!=a))return unescape(a[1])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"custom.historyChange\",custom:{historyChangeSource:",["escape",["macro",69],8,16],"}})},a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"domReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._pp=window._pp||[];if(\"",["escape",["macro",5],7],"\"==\"\/confirmation\/nnv\/\"\u0026\u0026\"",["escape",["macro",80],7],"\"==\"https:\/\/learning.oreilly.com\/register\/\")_pp.targetUrl=\"\/confirm\/trial\";else if(\"",["escape",["macro",5],7],"\"==\"\/confirmation\/nv\/\"\u0026\u0026\"",["escape",["macro",80],7],"\"==\"https:\/\/learning.oreilly.com\/subscribe\/\")_pp.targetUrl=\"\/confirm\/paid\";else if(\"",["escape",["macro",5],7],"\"==\"\/confirmation\/nnv\/\"\u0026\u0026\"",["escape",["macro",80],7],"\"==\"https:\/\/learning.oreilly.com\/signup\/\")_pp.targetUrl=\"\/confirm\/paid\";_pp.siteId=\"2508\";\n_pp.siteUId=\"",["escape",["macro",26],7],"\";_pp.orderValue=\"",["escape",["macro",81],7],"\";_pp.orderId=\"",["escape",["macro",82],7],"\";(function(){var ppjs=document.createElement(\"script\");ppjs.type=\"text\/javascript\";ppjs.async=true;ppjs.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.pbbl.co\/r\/\"+_pp.siteId+\".js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(ppjs,s)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":287
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction forceInputUppercase(a){var b=a.target.selectionStart,c=a.target.selectionEnd;a.target.value=a.target.value.toUpperCase();a.target.setSelectionRange(b,c)}void 0!=document.getElementById(\"id_promotion\")\u0026\u0026null!=document.getElementById(\"id_promotion\")\u0026\u0026document.getElementById(\"id_promotion\").addEventListener(\"keyup\",forceInputUppercase,!1);\nvoid 0!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026null!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026document.getElementsByName(\"promotionCode\")[0].addEventListener(\"keyup\",forceInputUppercase,!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":298
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":299
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":300
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":301
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":302
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":303
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SAConNY20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":304
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":305
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"M2ZEQWT5KBAELF4UZPEU34\";adroll_pix_id=\"C3PBWNOSTFB7FOPPRQFSJT\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":306
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cbutton id=\"addToCartButton\"\u003EAdd To Cart\u003C\/button\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#addToCartButton\").click(function(){qp(\"track\",\"Purchase\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":710
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":711
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"64888aa28b024c7388d63e9b444316de\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/64888aa28b024c7388d63e9b444316de\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Eqp(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":712
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":717
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar nonwExpandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-headerListItem a, .orm-ff-NavigationView-headerListItem a\");nonwExpandable.forEach(function(a,b){b+1!=nonwExpandable.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):b+1==nonwExpandable.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar nonwExpandableFo=document.querySelectorAll(\".drop-content li:not(.flyout-parent) a\");\nnonwExpandableFo.forEach(function(a,b){\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1!=nonwExpandableFo.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1==nonwExpandableFo.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar expandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-toggleControls a, .orm-ff-NavigationView-toggleControls a\");expandable.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.parentNode.parentNode.parentNode.querySelectorAll(\".orm-Button-btnContentWrap span\")[0].childNodes[1].textContent+\" | \"+a.textContent})})});var flyoutLinks=document.querySelectorAll(\".flyout a\");\nflyoutLinks.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.closest(\"li.flyout-parent\").getElementsByTagName(\"a\")[0].textContent+\" | \"+a.textContent})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":724
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":727
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":728
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"528172990687200\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528172990687200\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":729
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"528172990687200\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528172990687200\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":730
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":731
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":732
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":733
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":734
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":735
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":736
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":737
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":738
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-ca-20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":739
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:38517},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"stai-eu-20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":740
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":741
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nuqsj\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":742
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(c){var b=document.getElementById(c);b.kBind(\"playerPlayEnd.pe\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"End\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0});b.kUnbind(\".pe\")});var d=!1,e=!1,f=!1,g=!1,h=!1;b.addJsListener(\"playerUpdatePlayhead\",function(){var a=b.evaluate(\"{video.player.currentTime}\"),c=b.evaluate(\"{mediaProxy.entry.duration}\");a=100*parseFloat(a\/c);0\u003Ca\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",\neventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));25\u003Ca\u0026\u0026!e\u0026\u0026(e=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"25%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));50\u003Ca\u0026\u0026!f\u0026\u0026(f=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));75\u003Ca\u0026\u0026!g\u0026\u0026(g=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"75%\",eventLbl:",["escape",["macro",44],8,16],",\neventVal:0,nonInteraction:0}));95\u003Ca\u0026\u0026!h\u0026\u0026(h=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"95%\",eventLbl:",["escape",["macro",44],8,16],",eventVal:0,nonInteraction:0}));b.kUnbind(\".pp\")})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":744
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"windowReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":746
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":747
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2241084802780624\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{value:.01,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2241084802780624\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":748
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv2po\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":749
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":750
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"viewList\",item:[\"1\"]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":751
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"viewHome\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":752
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":753
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:34221},{event:\"setSiteType\",type:deviceType},{event:\"setData\",ui_strata:\"SACA20\"},{event:\"viewBasket\",item:[{id:\"1\",price:\"0\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":754
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:\"p-A1tSpBwAcJtww\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":756
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n  \u003Cscript type=\"text\/gtmscript\"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement(\"script\");a.src=(\"https:\"==document.location.protocol?\"https:\/\/secure\":\"http:\/\/edge\")+\".quantserve.com\/quant.js\";a.async=!0;a.type=\"text\/javascript\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\n_qevents.push({qacct:\"p-A1tSpBwAcJtww\",labels:\"_fp.event.Strata SJ 2020 Registration Confirmation,_fp.pcat.INSERT+PRODUCT+CATEGORY,_fp.customer.INSERT+CUSTOMER+TYPE\",orderid:",["escape",["macro",74],8,16],",revenue:",["escape",["macro",83],8,16],",event:\"refresh\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":757
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"2DWZXEKX7BASDKW76SIBCI\";adroll_pix_id=\"3FFYNBMHSNHAFN6SMDOJ4I\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":758
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oreilly.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/content\/sponsor-strata"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",22],
      "arg1":"0.0"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"VPTracker"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/radar(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"conferences.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*|learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"pushState"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(resource-centers|case-studies|learning-paths|videos).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"domReadyTimer"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"custom.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"article|podcast",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"jupyter notebook"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/blended-courses\/data-science\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oreilly.com\/skills\/"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)1669222_203($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"learning platform sign up",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"updatedEcommerce"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/purchased\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"-patterns-of-enterprise-transformation.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"oreilly.com\/ind_how-a-multi-cloud-strategy-enables-digital-transformation.html"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"VWO"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/purchased\/"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(\\\/(.*)|$|\\?(.*)))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",77],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)|(.*)www.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/(learning|radar|ideas)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.review(.*)|www.oreilly.review\\\/register\\\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/tensorflow\/tf-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"safaribooksonline.com\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/signup\/"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)oreilly.com\\\/(learning|ideas|radar)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"podcast"
    },{
      "function":"_eq",
      "arg0":["macro",79],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":".*www.oreilly.com.*data-science.*"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_introduction-to-machine-learning-interpretability.html"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(.*)learning.oreilly.com(.*)|www.oreilly.com\\\/register\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)1669222_1064($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"ind_understanding-patterns-of-enterprise-transformation"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sa-ny\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sa-ny\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"Continue"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_streaming-data.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_the-care-and-feeding-of-data-scientists.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_getting-dataops-right.html"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)1669222_1106($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"get.oreilly.com\/ind_security-with-ai-and-machine-learning.html"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-eu"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-eu\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"https:\/\/conferences.oreilly.com\/strata-data-ai\/stai-eu\/public\/register\/purchased"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"stai-ca\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"\/stai-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"stai-eu\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"stai-eu\/public\/content\/sponsors"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/strata-data-ai\/stai-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"stai-eu\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ca"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sa-ca\/public\/register"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"conferences.oreilly.com\/software-architecture\/sa-ca\/public\/register\/order"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sa-ca\/public\/content\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sa-ca\/public\/content\/sponsors"
    }],
  "rules":[
    [["if",0,1],["add",2,13]],
    [["if",1,2],["add",2,13]],
    [["if",1],["add",3,8,22,32,48,59,60,34,35,37,38,39,40,41,42,43]],
    [["if",1,3],["add",4]],
    [["if",1,4],["add",4]],
    [["if",1,5],["add",4]],
    [["if",1,6,7],["add",5,44,46,50]],
    [["if",1],["unless",8],["add",6,18]],
    [["if",9,10],["add",7,9,19,49,65]],
    [["if",1,11,12],["add",10]],
    [["if",1,13],["add",10]],
    [["if",11,14],["add",11]],
    [["if",14,15],["add",11]],
    [["if",11,16],["add",12]],
    [["if",1,17],["add",14]],
    [["if",16,18],["add",15]],
    [["if",16,19],["add",15]],
    [["if",16,20],["add",15]],
    [["if",14,21],["unless",22,23],["add",16]],
    [["if",1,24],["unless",22,25],["add",17]],
    [["if",26,28],["unless",27],["add",17]],
    [["if",29,30],["add",17]],
    [["if",29,31],["add",17,97]],
    [["if",32,33],["add",20]],
    [["if",34,36,37],["unless",35],["add",21]],
    [["if",1,38],["add",23]],
    [["if",1,39],["add",24,57]],
    [["if",32,40,41],["add",25]],
    [["if",14,42],["add",26]],
    [["if",43],["add",27]],
    [["if",1,44],["add",28,68,70,78],["block",67,77]],
    [["if",1,45],["add",29,67,74,75]],
    [["if",1,46],["add",29,67,74,75]],
    [["if",48],["unless",47],["add",30]],
    [["if",1,49],["add",31,100,105],["block",99]],
    [["if",1,50],["add",33]],
    [["if",51],["add",36,58,66,80]],
    [["if",1],["unless",52],["add",45]],
    [["if",1,53],["add",0,1]],
    [["if",33,54],["unless",55],["add",47]],
    [["if",33,56],["add",48,53,64]],
    [["if",1,57],["add",48,53]],
    [["if",1,58],["add",51]],
    [["if",1,59],["add",51]],
    [["if",1,60],["add",52]],
    [["if",51,61],["add",54]],
    [["if",33,62],["add",55]],
    [["if",1,63],["add",56]],
    [["if",1,64],["add",57]],
    [["if",26,28,29],["add",61]],
    [["if",29,33],["add",62]],
    [["if",1,65],["add",63]],
    [["if",1,66],["add",64]],
    [["if",67,68],["add",66]],
    [["if",1,69],["add",67,74,75,77]],
    [["if",1,70],["add",67,74,75]],
    [["if",1,71],["add",69],["block",73]],
    [["if",1,72],["add",71]],
    [["if",1,77],["add",72]],
    [["if",1,78],["add",72]],
    [["if",1,79],["add",73]],
    [["if",10,80,81],["add",76]],
    [["if",1,82],["add",79]],
    [["if",1,83],["add",79]],
    [["if",1,84],["add",79]],
    [["if",67,85],["add",80]],
    [["if",1,86],["add",81,83,89,95,107]],
    [["if",1,87],["add",81]],
    [["if",1,88],["add",82,84,90,96]],
    [["if",1,89],["add",85],["block",93]],
    [["if",1,90],["add",86],["block",94]],
    [["if",1,91],["add",87,108]],
    [["if",1,92],["add",88]],
    [["if",1,93],["add",91]],
    [["if",1,94],["add",91]],
    [["if",1,95],["add",92]],
    [["if",1,96],["add",92]],
    [["if",1,97],["add",93]],
    [["if",1,98],["add",94]],
    [["if",32,51],["add",97,98]],
    [["if",1,99],["add",99,101,104,109]],
    [["if",1,100],["add",102]],
    [["if",1,102],["add",103]],
    [["if",1,103],["add",103]],
    [["if",1,101],["add",106],["block",102]],
    [["if",1,73],["block",71,73,89,90,93,94,102,104]],
    [["if",1,74],["block",71,89,90,104]],
    [["if",1,75],["block",71,89,90,104]],
    [["if",1,76],["block",71,89,90,104]]]
},
"runtime":[]



};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Oe:!0},fa={};try{fa.__proto__=ea;da=fa.Oe;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ka=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var pa=function(){},qa=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},C=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return Ya[a]};Qa[7]=function(a){return String(a).replace(Xa,bb)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var hb=/['()]/g,ib=function(a){return"%"+a.charCodeAt(0).toString(16)};Qa[12]=function(a){var b=
encodeURIComponent(String(a));hb.lastIndex=0;return hb.test(b)?b.replace(hb,ib):b};var kb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,lb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return lb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Dc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.qf(d,k))}catch(y){b.de&&b.de(y,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Bb(a[n],b,c);xb&&(m=m||q===xb.pb);d.push(q)}return xb&&m?xb.tf(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ua(a[1])&&"macro"===a[1][0]&&xb.ag(a))return xb.Ag(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Zd:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Fb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Fb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Gb=function(){var a=function(b){return{toString:function(){return b}}};return{md:a("convert_case_to"),nd:a("convert_false_to"),od:a("convert_null_to"),pd:a("convert_true_to"),qd:a("convert_undefined_to"),ih:a("debug_mode_metadata"),oa:a("function"),Ee:a("instance_name"),Ge:a("live_only"),He:a("malware_disabled"),Ie:a("metadata"),oh:a("original_vendor_template_id"),Je:a("once_per_event"),Ad:a("once_per_load"),Fd:a("setup_tags"),Hd:a("tag_id"),Id:a("teardown_tags")}}();var Hb=null,Kb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Hb=Ib(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Jb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Hb(e[g]);if(2===h)return null;
if(1===h)return!1}return!0},Ib=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Fb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Xb,Yb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.af&&(l["fix_"+m]=!0),l.$d=l.$d||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=q.startTag();
if(p){var t=k.slice(p.length);if(t.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,N:p.N,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var t={};p[2].replace(e,function(v,w,y,x,z){var B=y||x||z||g.test(w)&&w||null,A=document.createElement("div");A.innerHTML=B;t[w]=A.textContent||A.innerText||B});return{tagName:p[1],N:t,mb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var t=q[p]();return t?(t.type=t.type||p,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.$d&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ce=function(){return this[this.length-1]};v.Fc=function(A){var E=this.ce();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.pf=
function(A){for(var E=0,J;J=this[E];E++)if(J.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.mb=p.test(A.tagName)||A.mb);return A},y=u,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Fc("TABLE")?(k="<TBODY>"+k,B()):l.wh&&t.test(E)&&v.pf(E)?v.Fc(E)?x():(k="</"+A.tagName+">"+k,B()):A.mb||v.push(A)},endTag:function(A){v.ce()?l.Df&&!v.Fc(A.tagName)?x():v.pop():l.Df&&(y(),B())}},B=function(){var A=k,E=w(y());k=A;if(E&&
z[E.type])z[E.type](E)};u=function(){B();return w(y())}}();return{append:function(p){k+=p},Ig:u,Dh:function(p){for(var t;(t=u())&&(!p[t.type]||!1!==p[t.type](t)););},clear:function(){var p=k;k="";return p},Eh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Gh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Fh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.O=b;a.R=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.N){var u=m.N[q];n+=
" "+q+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.mb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.C=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;Xb=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,u,p){var t,v=q&&q.length||0;for(t=0;t<v;t++)u.call(p,q[t],t)}function d(q,u,p){for(var t in q)q.hasOwnProperty(t)&&u.call(p,t,q[t])}function e(q,
u){d(u,function(p,t){q[p]=t});return q}function g(q,u){q=q||{};d(u,function(p,t){b(q[p])||(q[p]=t)});return q}function h(q){try{return m.call(q)}catch(p){var u=[];c(q,function(t){u.push(t)});return u}}var k={Se:a,Te:a,Ue:a,Ve:a,bf:a,cf:function(q){return q},done:a,error:function(q){throw q;},Lg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(p,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,t){var v=p.ownerDocument;e(this,{root:p,options:t,nb:v.defaultView||v.parentWindow,Ga:v,Qb:Xb("",{af:!0}),qc:[p],Rc:"",Sc:v.createElement(p.nodeName),jb:[],va:[]});q(this.Sc,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.va,arguments);for(var p;!this.Gb&&this.va.length;)p=this.va.shift(),"function"===typeof p?this.jf(p):this.ed(p)};u.prototype.jf=function(p){var t={type:"function",value:p.name||p.toString()};this.Oc(t);p.call(this.nb,this.Ga);this.fe(t)};
u.prototype.ed=function(p){this.Qb.append(p);for(var t,v=[],w,y;(t=this.Qb.Ig())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.dh(v);w&&this.Kf(t);y&&this.Lf(t)};u.prototype.dh=function(p){var t=this.ef(p);t.Td&&(t.Bc=this.Rc+t.Td,this.Rc+=t.Eg,this.Sc.innerHTML=t.Bc,this.$g())};u.prototype.ef=function(p){var t=this.qc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.N){if(!/^noscript$/i.test(x.tagName)){var z=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.N.id&&"ps-style"!==x.N.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.mb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Hh:p,raw:v.join(""),Td:w.join(""),Eg:y.join("")}};u.prototype.$g=function(){for(var p,t=[this.Sc];b(p=t.shift());){var v=1===p.nodeType;if(!v||!q(p,"proxyof")){v&&(this.qc[q(p,"id")]=p,q(p,"id",null));var w=p.parentNode&&q(p.parentNode,"proxyof");
w&&this.qc[w].appendChild(p)}t.unshift.apply(t,h(p.childNodes))}};u.prototype.Kf=function(p){var t=this.Qb.clear();t&&this.va.unshift(t);p.src=p.N.src||p.N.qh;p.src&&this.jb.length?this.Gb=p:this.Oc(p);var v=this;this.bh(p,function(){v.fe(p)})};u.prototype.Lf=function(p){var t=this.Qb.clear();t&&this.va.unshift(t);p.type=p.N.type||p.N.rh||"text/css";this.eh(p);t&&this.write()};u.prototype.eh=function(p){var t=this.hf(p);this.Yf(t);p.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=p.content:
t.appendChild(this.Ga.createTextNode(p.content)))};u.prototype.hf=function(p){var t=this.Ga.createElement(p.tagName);t.setAttribute("type",p.type);d(p.N,function(v,w){t.setAttribute(v,w)});return t};u.prototype.Yf=function(p){this.ed('<span id="ps-style"/>');var t=this.Ga.getElementById("ps-style");t.parentNode.replaceChild(p,t)};u.prototype.Oc=function(p){p.vg=this.va;this.va=[];this.jb.unshift(p)};u.prototype.fe=function(p){p!==this.jb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.jb.shift(),this.write.apply(this,p.vg),!this.jb.length&&this.Gb&&(this.Oc(this.Gb),this.Gb=null))};u.prototype.bh=function(p,t){var v=this.ff(p),w=this.Rg(v),y=this.options.Se;p.src&&(v.src=p.src,this.Pg(v,w?y:function(){t();y()}));try{this.Xf(v),p.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.ff=function(p){var t=this.Ga.createElement(p.tagName);d(p.N,function(v,w){t.setAttribute(v,w)});p.content&&(t.text=p.content);return t};u.prototype.Xf=function(p){this.ed('<span id="ps-script"/>');
var t=this.Ga.getElementById("ps-script");t.parentNode.replaceChild(p,t)};u.prototype.Pg=function(p,t){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);t()}})};u.prototype.Rg=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.Lg&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function q(){var w=t.shift(),y;w&&(y=w[w.length-1],y.Te(),w.stream=u.apply(null,w),y.Ue())}function u(w,y,x){function z(J){J=x.cf(J);v.write(J);x.Ve(J)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var B=w.ownerDocument,A={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.nb.onerror||a;v.nb.onerror=function(J,M,U){x.error({Ah:J+
" - "+M+":"+U});E.apply(v.nb,arguments)};v.write(y,function(){e(B,A);v.nb.onerror=E;x.done();v=null;q()});return v}var p=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.zh?w[0]:w;var z=[w,y,x];w.zg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.bf(z);t.push(z);v||q();return w.zg},{streams:{},Ch:t,sh:n})}();Yb=l.postscribe}})();var D=window,F=document,Zb=navigator,$b=F.currentScript&&F.currentScript.src,ac=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},bc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},cc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;bc(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var g=ka.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},dc=function(){if($b){var a=$b.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);bc(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},ic=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},mc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a){return nc?F.querySelectorAll(a):null},pc=function(a,b){if(!nc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qc=!1;if(F.querySelectorAll)try{var rc=F.querySelectorAll(":root");rc&&1==rc.length&&rc[0]==F.documentElement&&(qc=!0)}catch(a){}var nc=qc;var H={na:"_ee",fc:"event_callback",Pa:"event_timeout",D:"gtag.config",T:"allow_ad_personalization_signals",gc:"restricted_data_processing",W:"cookie_expires",Oa:"cookie_update",xa:"session_duration",ba:"user_properties"};var Ic=/[A-Z]+/,Jc=/\s/,Kc=function(a){if(f(a)&&(a=Ea(a),!Jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],m:d}}}}},Mc=function(a){for(var b={},c=0;c<a.length;++c){var d=Kc(a[c]);d&&(b[d.id]=d)}Lc(b);var e=[];za(b,function(g,h){e.push(h)});return e};
function Lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.m[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nc={},Oc=null,Pc=Math.random();Nc.s="GTM-5P4V6Z";Nc.tb="181";var Qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Rc="www.googletagmanager.com/gtm.js";var Sc=Rc,Tc=null,Uc=null,Vc=null,Wc="//www.googletagmanager.com/a?id="+Nc.s+"&cv=321",Xc={},Yc={},Zc=function(){var a=Oc.sequence||0;Oc.sequence=a+1;return a};var $c={},I=function(a,b){$c[a]=$c[a]||[];$c[a][b]=!0},ad=function(a){for(var b=[],c=$c[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var cd=function(){return"&tc="+sb.filter(function(a){return a}).length},fd=function(){dd||(dd=D.setTimeout(ed,500))},ed=function(){dd&&(D.clearTimeout(dd),dd=void 0);void 0===gd||hd[gd]&&!id&&!jd||(kd[gd]||ld.cg()||0>=md--?(I("GTM",1),kd[gd]=!0):(ld.Jg(),fc(nd()),hd[gd]=!0,od=pd=jd=id=""))},nd=function(){var a=gd;if(void 0===a)return"";var b=ad("GTM"),c=ad("TAGGING");return[qd,hd[a]?"":"&es=1",rd[a],b?"&u="+b:"",c?"&ut="+c:"",cd(),id,jd,pd,od,"&z=0"].join("")},sd=function(){return[Wc,"&v=3&t=t","&pid="+
wa(),"&rv="+Nc.tb].join("")},td="0.005000">Math.random(),qd=sd(),ud=function(){qd=sd()},hd={},id="",jd="",od="",pd="",gd=void 0,rd={},kd={},dd=void 0,ld=function(a,b){var c=0,d=0;return{cg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Jg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),md=1E3,vd=function(a,b){if(td&&!kd[a]&&gd!==a){ed();gd=a;od=id="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";rd[a]="&e="+c+"&eid="+a;fd()}},wd=function(a,b,c){if(td&&!kd[a]&&
b){a!==gd&&(ed(),gd=a);var d,e=String(b[Gb.oa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var g=c+d;id=id?id+"."+g:"&tr="+g;fd();2022<=nd().length&&ed()}},xd=function(a,b,c){if(td&&!kd[a]){a!==gd&&(ed(),gd=a);var d=c+b;jd=jd?jd+
"."+d:"&epr="+d;fd();2022<=nd().length&&ed()}};var yd={},zd=new xa,Ad={},Bd={},Ed={name:"dataLayer",set:function(a,b){C(La(a,b),Ad);Cd()},get:function(a){return Dd(a,2)},reset:function(){zd=new xa;Ad={};Cd()}},Dd=function(a,b){if(2!=b){var c=zd.get(a);if(td){var d=Fd(a);c!==d&&I("GTM",5)}return c}return Fd(a)},Fd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Hd(d)},Hd=function(a){for(var b=Ad,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Jd=function(a,b){Bd.hasOwnProperty(a)||(zd.set(a,b),C(La(a,b),Ad),Cd())},Cd=function(a){za(Bd,function(b,c){zd.set(b,c);C(La(b,void 0),Ad);C(La(b,c),Ad);a&&delete Bd[b]})},Kd=function(a,b,c){yd[a]=yd[a]||{};var d=1!==c?Fd(b):zd.get(b);"array"===Na(d)||"object"===Na(d)?yd[a][b]=C(d):yd[a][b]=d},Ld=function(a,b){if(yd[a])return yd[a][b]};var Md=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Nd()||d||"http:"!=D.location.protocol?a:b)+c},Nd=function(){var a=dc(),b;if(1===a)a:{var c=Sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var be=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ce={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},de={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},ee="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ge=function(a){Yc.pntr=Yc.pntr||["nonGoogleScripts"];Yc.snppx=Yc.snppx||["nonGoogleScripts"];Yc.qpx=Yc.qpx||["nonGooglePixels"];var b=Dd("gtm.whitelist");b&&I("GTM",9);
var c=b&&Ka(Da(b),ce),d=Dd("gtm.blacklist");d||(d=Dd("tagTypeBlacklist"))&&I("GTM",3);d?I("GTM",8):d=[];fe()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Da(d),"google")&&I("GTM",2);var e=d&&Ka(Da(d),de),g={};return function(h){var k=h&&h[Gb.oa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];
var l=Yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>r(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=ya(e,ee));return g[k]=v}},fe=function(){return be.test(D.location&&D.location.hostname)};var he={qf:function(a,b){b[Gb.md]&&"string"===typeof a&&(a=1==b[Gb.md]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Gb.od)&&null===a&&(a=b[Gb.od]);b.hasOwnProperty(Gb.qd)&&void 0===a&&(a=b[Gb.qd]);b.hasOwnProperty(Gb.pd)&&!0===a&&(a=b[Gb.pd]);b.hasOwnProperty(Gb.nd)&&!1===a&&(a=b[Gb.nd]);return a}};var ie={active:!0,isWhitelisted:function(){return!0}},je=function(a){var b=Oc.zones;!b&&a&&(b=Oc.zones=a());return b};var ke=function(){};var le=!1,me=0,ne=[];function oe(a){if(!le){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){le=!0;for(var e=0;e<ne.length;e++)G(ne[e])}ne.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function pe(){if(!le&&140>me){me++;try{F.documentElement.doScroll("left"),oe()}catch(a){D.setTimeout(pe,50)}}}var qe=function(a){le?a():ne.push(a)};var re={},se={},te=function(a,b,c,d){if(!se[a]||Qc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return se[a].tags.push(e)-1},ue=function(a,b,c,d){if(se[a]){var e=se[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ve(a){for(var b=re[a]||[],c=0;c<b.length;c++)b[c]();re[a]={push:function(d){d(Nc.s,se[a])}}}
var ye=function(a,b,c){se[a]={tags:[]};qa(b)&&we(a,b);c&&D.setTimeout(function(){return ve(a)},Number(c));return xe(a)},we=function(a,b){re[a]=re[a]||[];re[a].push(Ha(function(){return G(function(){b(Nc.s,se[a])})}))};function xe(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&ve(a)})},Ze:function(){d=!0;b>=c&&ve(a)}}};var ze=function(){function a(d){return!ra(d)||0>d?0:d}if(!Oc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Ed.get("gtm.start"))?Ed.get("gtm.start"):0;Oc._li={cst:a(c-b),cbt:a(Uc-b)}}};var De=!1,Ee=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Fe=!1;
var Ge=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}ze();return D[b]},He=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ee();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Je=function(){},Ie=function(){return D.GoogleAnalyticsObject||"ga"};var Le=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Me=/:[0-9]+$/,Ne=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Qe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Oe(a.protocol)||Oe(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Me,"").toLowerCase());var g=b,h,k=Oe(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=Pe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Me,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ne(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Oe=function(a){return a?a.replace(":","").toLowerCase():""},Pe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Re=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Me,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function We(a,b,c,d){var e=sb[a],g=Xe(a,b,c,d);if(!g)return null;var h=Bb(e[Gb.Fd],c,[]);if(h&&h.length){var k=h[0];g=We(k.index,{B:g,w:1===k.Zd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Xe(a,b,c,d){function e(){if(g[Gb.He])k();else{var w=Cb(g,c,[]),y=te(c.id,String(g[Gb.oa]),Number(g[Gb.Hd]),w[Gb.Ie]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-B;wd(c.id,sb[a],"5");ue(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-B;wd(c.id,sb[a],"6");ue(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;wd(c.id,g,"1");var z=function(){var A=Fa()-B;wd(c.id,g,"7");ue(c.id,y,"exception",A);x||(x=!0,k())};var B=Fa();try{Ab(w,c)}catch(A){z(A)}}}var g=sb[a],h=b.B,k=b.w,l=b.terminate;if(c.Dc(g))return null;var m=Bb(g[Gb.Id],c,[]);if(m&&m.length){var n=m[0],q=We(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Zd?l:q}if(g[Gb.Ad]||g[Gb.Je]){var u=g[Gb.Ad]?tb:c.Sg,p=h,t=k;if(!u[a]){e=Ha(e);var v=Ye(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function Ye(a,b,c){var d=[],e=[];b[a]=Ze(d,e,c);return{B:function(){b[a]=$e;for(var g=0;g<d.length;g++)d[g]()},w:function(){b[a]=af;for(var g=0;g<e.length;g++)e[g]()}}}function Ze(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function $e(a){a()}function af(a,b){b()};var df=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.hb[d]){var e=sb[d];var g=b.add();try{var h=We(d,{B:g,w:g,terminate:g},a,d);h?c.push({qe:d,ke:Db(e),Bf:h}):(bf(d,a),g())}catch(l){g()}}b.Ze();c.sort(cf);for(var k=0;k<c.length;k++)c[k].Bf();return 0<c.length};function cf(a,b){var c,d=b.ke,e=a.ke;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.qe,k=b.qe;g=h>k?1:h<k?-1:0}return g}
function bf(a,b){if(!td)return;var c=function(d){var e=b.Dc(sb[d])?"3":"4",g=Bb(sb[d][Gb.Fd],b,[]);g&&g.length&&c(g[0].index);wd(b.id,sb[d],e);var h=Bb(sb[d][Gb.Id],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ef=!1,ff=function(a,b,c,d,e){if("gtm.js"==b){if(ef)return!1;ef=!0}vd(a,b);var g=ye(a,d,e);Kd(a,"event",1);Kd(a,"ecommerce",1);Kd(a,"gtm");var h={id:a,name:b,Dc:ge(c),hb:[],Sg:[],de:function(){I("GTM",6)}};h.hb=Kb(h);var k=df(h,g);
if(!k)return k;for(var l=0;l<h.hb.length;l++)if(h.hb[l]){var m=sb[l];if(m&&!Qc[String(m[Gb.oa])])return!0}return!1};var hf=/^https?:\/\/www\.googletagmanager\.com/;function jf(){var a;return a}function lf(a,b){}
function kf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function mf(){var a=!1;return a};var nf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},of=function(a){var b=new nf;b.eventModel=a;return b},pf=function(a,b){a.targetConfig=b;return a},qf=function(a,b){a.containerConfig=b;return a},rf=function(a,b){a.h=b;return a},sf=function(a,b){a.globalConfig=b;return a},tf=function(a,b){a.B=b;return a},uf=function(a,b){a.w=b;return a};
nf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var vf=function(a){function b(e){za(e,function(g){c[g]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var wf={},xf=["G"];wf.se="";var yf=wf.se.split(",");function zf(){var a=Oc;return a.gcq=a.gcq||new Af}
var Bf=function(a,b,c){zf().register(a,b,c)},Cf=function(a,b,c,d){zf().push("event",[b,a],c,d)},Df=function(a,b){zf().push("config",[a],b)},Ef={},Ff=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},Gf=function(a,b,c,d,e){this.type=a;this.o=b;this.M=c||"";this.h=d;this.i=e},Af=function(){this.i={};this.o={};this.h=[]},Hf=function(a,b){var c=Kc(b);return a.i[c.containerId]=a.i[c.containerId]||new Ff},If=function(a,b,c,d){if(d.M){var e=Hf(a,d.M),
g=e.o;if(g){var h=C(c),k=C(e.targetConfig[d.M]),l=C(e.containerConfig),m=C(e.i),n=C(a.o),q=Dd("gtm.uniqueEventId"),u=Kc(d.M).prefix,p=uf(tf(sf(rf(qf(pf(of(h),k),l),m),n),function(){xd(q,u,"2");}),function(){xd(q,u,"3");});try{xd(q,u,"1");3===g.length?g(b,d.o,p):4===g.length&&g(d.M,b,d.o,
p)}catch(t){xd(q,u,"4");}}}};
Af.prototype.register=function(a,b,c){if(3!==Hf(this,a).status){Hf(this,a).o=b;Hf(this,a).status=3;c&&(Hf(this,a).i=c);var d=Kc(a),e=Ef[d.containerId];if(void 0!==e){var g=Oc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Oc[d.containerId]._spx&&(h=h.toLowerCase());var k=Dd("gtm.uniqueEventId"),l=h,m=Fa()-g;if(td&&!kd[k]){k!==gd&&(ed(),gd=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);pd=pd?pd+","+n:"&cl="+n}delete Ef[d.containerId]}this.flush()}};
Af.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var g=Kc(c),h;if(h=g){var k;if(k=1===Hf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Hf(this,c).status=2,this.push("require",[],g.containerId),Ef[g.containerId]=Fa(),!Md())){var m=encodeURIComponent(g.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";cc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.h.push(new Gf(a,e,c,b,d));d||this.flush()};
Af.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Hf(this,c.M).status&&!a)return;break;case "set":za(c.h[0],function(l,m){C(La(l,m),b.o)});break;case "config":var d=c.h[0],e=!!d[H.Fb];delete d[H.Fb];var g=Hf(this,c.M),h=Kc(c.M),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.M]={});g.h&&e||If(this,H.D,d,c);g.h=!0;delete d[H.na];k?C(d,g.containerConfig):C(d,g.targetConfig[c.M]);break;
case "event":If(this,c.h[1],c.h[0],c)}this.h.shift()}};var Jf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Mf=function(a,b,c,d){var e=Kf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Lf(e,function(g){return g.Hb},b);if(1===e.length)return e[0].id;e=Lf(e,function(g){return g.ib},c);return e[0]?e[0].id:void 0}};
function Nf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Jf(b,e).indexOf(c)}
var Rf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Of(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Pf(y,u)&&Nf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Pf(q,u)&&Nf(m,a,l)}return k};function Lf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Kf(a,b){for(var c=[],d=Jf(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Hb:1*k[0]||1,ib:1*k[1]||1}))}}return c}
var Sf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Tf=/(^|\.)doubleclick\.net$/i,Pf=function(a,b){return Tf.test(document.location.hostname)||"/"===b&&Sf.test(a)},Of=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Tf.test(e)||Sf.test(e)||a.push("none");return a};var Uf="".split(/,/),Vf=!1;var Wf=null,Xf={},Yf={},Zf;function $f(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.fc]&&(c.eventCallback=b[H.fc]),b[H.Pa]&&(c.eventTimeout=b[H.Pa]));return c}
var fg={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=$f(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).xh().h(a[1],a[2])},set:function(a){var b;2==a.length&&
Pa(a[1])?b=C(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||ua(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},gg={policy:!0};var hg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},jg=function(a){var b=ig(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var wg=function(a){if(vg(a))return a;this.h=a};wg.prototype.Jf=function(){return this.h};var vg=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};wg.prototype.getUntrustedUpdateValue=wg.prototype.Jf;var xg=!1,yg=[];function zg(){if(!xg){xg=!0;for(var a=0;a<yg.length;a++)G(yg[a])}}var Ag=function(a){xg?G(a):yg.push(a)};var Bg=[],Cg=!1,Dg=function(a){return D["dataLayer"].push(a)},Eg=function(a){var b=Oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Fg(a){var b=a._clear;za(a,function(g,h){"_clear"!==g&&(b&&Jd(g,void 0),Jd(g,h))});Tc||(Tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Zc(),a["gtm.uniqueEventId"]=d,Jd("gtm.uniqueEventId",d));Vc=c;var e=Gg(a);Vc=
null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function Gg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Oc.zones;d=e?e.checkState(Nc.s,c):ie;return d.active?ff(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Hg(){for(var a=!1;!Cg&&0<Bg.length;){Cg=!0;delete Ad.eventModel;Cd();var b=Bg.shift();if(null!=b){var c=vg(b);if(c){var d=b;b=vg(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=Dd(h,1);if(ua(k)||Pa(k))k=C(k);Bd[h]=k}}try{if(qa(b))try{b.call(Ed)}catch(v){}else if(ua(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Dd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&f(b[0])){var t=fg[b[0]];if(t&&(!c||!gg[b[0]])){b=t(b);break a}}b=void 0}if(!b){Cg=!1;continue}}a=Fg(b)||a}}finally{c&&Cd(!0)}}Cg=!1}
return!a}function Ig(){var a=Hg();try{hg(D["dataLayer"],Nc.s)}catch(b){}return a}
var Kg=function(){var a=ac("dataLayer",[]),b=ac("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};qe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ag(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new wg(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Bg.push.apply(Bg,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Hg()&&h};Bg.push.apply(Bg,a.slice(0));Jg()&&G(Ig)},Jg=function(){var a=!0;return a};var Lg={};Lg.pb=new String("undefined");
var Mg=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Lg.pb?b:a[d]);return c.join("")}};Mg.prototype.toString=function(){return this.h("undefined")};Mg.prototype.valueOf=Mg.prototype.toString;Lg.Me=Mg;Lg.nc={};Lg.tf=function(a){return new Mg(a)};var Ng={};Lg.Kg=function(a,b){var c=Zc();Ng[c]=[a,b];return c};Lg.Wd=function(a){var b=a?0:1;return function(c){var d=Ng[c];if(d&&"function"===typeof d[b])d[b]();Ng[c]=void 0}};Lg.ag=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Lg.Ag=function(a){if(a===Lg.pb)return a;var b=Zc();Lg.nc[b]=a;return'google_tag_manager["'+Nc.s+'"].macro('+b+")"};Lg.ng=function(a,b,c){a instanceof Lg.Me&&(a=a.h(Lg.Kg(b,c)),b=pa);return{Bc:a,B:b}};var Og=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Pg=function(a){Oc.hasOwnProperty("autoEventsSettings")||(Oc.autoEventsSettings={});var b=Oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Qg=function(a,b,c){Pg(a)[b]=c},Rg=function(a,b,c,d){var e=Pg(a),g=Ga(e,b,d);e[b]=c(g)},Sg=function(a,b,c){var d=Pg(a);return Ga(d,b,c)};var Tg=function(){for(var a=Zb.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Wg=function(a,b,c,d){var e=Ug(b);return Mf(a,e,Vg(c),d)},Xg=function(a,b,c,d){var e=""+Ug(c),g=Vg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Ug=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Vg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Yg=["1"],Zg={},ch=function(a,b,c,d){var e=$g(a);Zg[e]||ah(e,b,c)||(bh(e,Tg(),b,c,d),ah(e,b,c))};function bh(a,b,c,d,e){var g=Xg(b,"1",d,c);Rf(a,g,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function ah(a,b,c){var d=Wg(a,b,c,Yg);d&&(Zg[a]=d);return d}function $g(a){return(a||"_gcl")+"_au"};var dh=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({$c:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].$c]||(g[a[h].$c]=[]),g[a[h].$c].push({timestamp:k[1],Gf:k[2]}))}return g};function eh(){for(var a=fh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function gh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var fh,hh;function ih(a){fh=fh||gh();hh=hh||eh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(fh[l],fh[m],fh[n],fh[q])}return b.join("")}
function jh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=hh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}fh=fh||gh();hh=hh||eh();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var kh;function lh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ph=function(){var a=mh,b=nh,c=oh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){gc(F,"mousedown",d);gc(F,"keyup",d);gc(F,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},oh=function(){var a=ac("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var qh=/(.*?)\*(.*?)\*(.*)/,rh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,sh=/^(?:www\.|m\.|amp\.)+/,th=/([^?#]+)(\?[^#]*)?(#.*)?/,uh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,wh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(ih(String(d))))}var e=b.join("*");return["1",vh(e),e].join("*")},vh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=kh)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}kh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^kh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},yh=function(){return function(a){var b=Re(D.location.href),c=b.search.replace("?",""),d=Ne(c,"_gl",!0)||"";a.query=xh(d)||{};var e=Qe(b,"fragment").match(uh);a.fragment=xh(e&&e[3]||
"")||{}}},zh=function(){var a=yh(),b=oh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},xh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=qh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===vh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=jh(u[p+1]);return q}}}}catch(t){}};
function Ah(a,b,c){function d(m){var n=m,q=uh.exec(n),u=n;if(q){var p=q[2],t=q[4];u=q[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=th.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Bh(a,b,c){for(var d={},e={},g=oh().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&lh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=wh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var t=F.createElement("input");t.setAttribute("type","hidden");t.setAttribute("name","_gl");t.setAttribute("value",
l);a.appendChild(t)}}else if("post"===m){var v=Ah(l,a.action);Le.test(v)&&(a.action=v)}}}else Ch(l,a,!1)}if(!c&&Ja(e)){var w=wh(e);Ch(w,a,!0)}}function Ch(a,b,c){if(b.href){var d=Ah(a,b.href,void 0===c?!1:c);Le.test(d)&&(b.href=d)}}
var mh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Bh(e,e.hostname,!1)}}catch(h){}},nh=function(a){try{if(a.action){var b=Qe(Re(a.action),"host");Bh(a,b,!0)}}catch(c){}},Dh=function(a,b,c,d){ph();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};oh().decorators.push(e)},Eh=function(){var a=F.location.hostname,b=rh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(sh,""),l=e.replace(sh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Fh=function(a,b){return!1===a?!1:a||b||Eh()};var Gh={};var Hh=/^\w+$/,Ih=/^[\w-]+$/,Jh=/^~?[\w-]+$/,Kh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Lh(a){return a&&"string"==typeof a&&a.match(Hh)?a:"_gcl"}var Nh=function(){var a=Re(D.location.href),b=Qe(a,"query",!1,void 0,"gclid"),c=Qe(a,"query",!1,void 0,"gclsrc"),d=Qe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ne(e,"gclid",void 0);c=c||Ne(e,"gclsrc",void 0)}return Mh(b,c,d)};
function Mh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Ih))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Gh.gtm_3pds?0:Gh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Ph=function(a){var b=Nh();Oh(b,a)};
function Oh(a,b,c){function d(q,u){var p=Qh(q,e);p&&Rf(p,u,h,g,l,!0)}b=b||{};var e=Lh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ja?7776E3:b.Ja;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Ih?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Sh=function(a,b,c,d,e){for(var g=zh(),h=Lh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Kh[l]){var m=Qh(l,h),n=g[m];if(n){var q=Math.min(Rh(n),Fa()),u;b:{for(var p=q,t=Jf(m,F.cookie),v=0;v<t.length;++v)if(Rh(t[v])>p){u=!0;break b}u=!1}u||Rf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Oh(Mh(g.gclid,g.gclsrc),w)},Qh=function(a,b){var c=Kh[a];if(void 0!==c)return b+c},Rh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Th(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Uh=function(a,b,c,d,e){if(ua(b)){var g=Lh(e);Dh(function(){for(var h={},k=0;k<a.length;++k){var l=Qh(a[k],g);if(l){var m=Jf(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Vh=function(a){return a.filter(function(b){return Jh.test(b)})},Wh=function(a,b){for(var c=Lh(b&&b.prefix),d={},e=0;e<a.length;e++)Kh[a[e]]&&(d[a[e]]=Kh[a[e]]);za(d,function(g,h){var k=Jf(c+h,F.cookie);if(k.length){var l=k[0],m=Rh(l),n={};n[g]=[Th(l)];Oh(n,b,m)}})};var Xh=/^\d+\.fls\.doubleclick\.net$/;function Yh(a){var b=Re(D.location.href),c=Qe(b,"host",!1);if(c&&c.match(Xh)){var d=Qe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Zh(a,b){if("aw"==a||"dc"==a){var c=Yh("gcl"+a);if(c)return c.split(".")}var d=Lh(b);if("_gcl"==d){var e;e=Nh()[a]||[];if(0<e.length)return e}var g=Qh(a,d),h;if(g){var k=[];if(F.cookie){var l=Jf(g,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Th(l[m]);n&&-1===r(k,n)&&k.push(n)}h=Vh(k)}else h=k}else h=k}else h=[];return h}
var $h=function(){var a=Yh("gac");if(a)return decodeURIComponent(a);var b=dh(),c=[];za(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Gf);g=Vh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},ai=function(a,b,c,d,e){ch(b,c,d,e);var g=Zg[$g(b)],h=Nh().dc||[],k=!1;if(g&&0<h.length){var l=Oc.joined_au=Oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+g;Zb.sendBeacon&&Zb.sendBeacon(u)||fc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=$g(b),t=Zg[p];t&&bh(p,t,c,d,e)}};var bi;if(3===Nc.tb.length)bi="g";else{var ci="G";bi=ci}
var di={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:bi,OPT:"o"},ei=function(a){var b=Nc.s.split("-"),c=b[0].toUpperCase(),d=di[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Nc.tb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Nc.tb+e};var ji=["input","select","textarea"],ki=["button","hidden","image","reset","submit"],li=function(a){var b=a.tagName.toLowerCase();return!va(ji,function(c){return c===b})||"input"===b&&va(ki,function(c){return c===a.type.toLowerCase()})?!1:!0},mi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):lc(a,["form"],100)},ni=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(li(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var qi=!!D.MutationObserver,ri=void 0,si=function(a){if(!ri){var b=function(){var c=F.body;if(c)if(qi)(new MutationObserver(function(){for(var e=0;e<ri.length;e++)G(ri[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<ri.length;e++)G(ri[e])}))})}};ri=[];F.body?b():G(b)}ri.push(a)};
var Di=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ei=function(a){var b=Di(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Fi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var Gi=[],Hi=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),Ji=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<Gi.length;g++)if(!Gi[g])return Gi[g]=d,g;return Gi.push(d)-1},Ki=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Fa()};G(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Ei(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},Li=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Hi){var e=!1;G(function(){e||Ki(a,b,c)()});return Ji(function(g){e=!0;for(var h={Ma:0};h.Ma<g.length;h={Ma:h.Ma},h.Ma++)G(function(k){return function(){return a(g[k.Ma])}}(h))},b,c)}return D.setInterval(Ki(a,b,c),1E3)},Mi=function(a){Hi?0<=a&&a<Gi.length&&Gi[a]&&(Gi[a].disconnect(),Gi[a]=void 0):D.clearInterval(a)};
var Ni=function(a,b,c){function d(){var h=a();g+=e?(Fa()-e)*h.playbackRate/1E3:0;e=Fa()}var e=0,g=0;return{Ib:function(h,k,l){var m=a(),n=m.Xd,q=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Xd*k):Math.round(m.uf),u=void 0!==k?Math.round(100*k):0>=n?0:Math.round(q/n*100),p=F.hidden?!1:.5<=Ei(c);d();var t=Og(c,"gtm.video",[b]);t["gtm.videoProvider"]="youtube";t["gtm.videoStatus"]=h;t["gtm.videoUrl"]=m.url;t["gtm.videoTitle"]=m.title;t["gtm.videoDuration"]=Math.round(n);t["gtm.videoCurrentTime"]=
Math.round(q);t["gtm.videoElapsedTime"]=Math.round(g);t["gtm.videoPercent"]=u;t["gtm.videoVisible"]=p;Dg(t)},Mg:function(){e=Fa()},oc:function(){d()}}};var Oi=D.clearTimeout,Pi=D.setTimeout,R=function(a,b,c){if(Md()){b&&G(b)}else return cc(a,b,c)},Qi=function(){return D.location.href},Ri=function(a){return Qe(Re(a),"fragment")},Si=function(a){return Pe(Re(a))},W=function(a,b){return Dd(a,b||2)},Ti=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Dg(a)):d=Dg(a);return d},Ui=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Vi=function(a,b,c){return Jf(a,b,void 0===c?!0:!!c)},Wi=function(a,b){if(Md()){b&&G(b)}else ec(a,b)},Xi=function(a){return!!Sg(a,"init",!1)},Yi=function(a){Qg(a,"init",!0)},Zi=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Sc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},$i=function(a,b){var c=a[b];return c};
var aj=Lg.ng;var bj;var yj=new xa;function zj(a,b){function c(h){var k=Re(h),l=Qe(k,"protocol"),m=Qe(k,"host",!0),n=Qe(k,"port"),q=Qe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function Aj(a){return Bj(a)?1:0}
function Bj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(Aj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=yj.get(p);t||(t=new RegExp(c,u),yj.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return zj(b,
c)}return!1};var Cj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Dj={},Ej=encodeURI,Y=encodeURIComponent,Fj=fc;var Gj=function(a,b){if(!a)return!1;var c=Qe(Re(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Hj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Dj.bg=function(){var a=!1;return a};var Uk=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var el=window,fl=document,gl=function(a){var b=el._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===el["ga-disable-"+a])return!0;try{var c=el.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Jf("AMP_TOKEN",fl.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return fl.getElementById("__gaOptOutExtension")?!0:!1};var jl=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ba]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var nl=function(a,b,c){Cf(b,c,a)},ol=function(a,b,c){Cf(b,c,a,!0)},ql=function(a,b){};
function pl(a,b){}var Z={a:{}};

Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),A=0;A<B.length;A++){var E=Number(B[A]);if(isNaN(E))return[];n.test(B[A])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=Di(),A=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+A,z);return{wf:x,xf:z}}}function d(){p=X("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,z,B,A){var E=l(z),J={},M;for(M in E){J.wa=M;if(E.hasOwnProperty(J.wa)){var U=Number(J.wa);x<U||(Ti({event:"gtm.scrollDepth","gtm.scrollThreshold":U,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":E[J.wa].join(",")}),Rg("sdl",z,function(V){return function(S){delete S[V.wa];return S}}(J),{}))}J={wa:J.wa}}}function g(){var x=y(),z=x.wf,B=x.xf,A=z/v.scrollWidth*100,E=B/v.scrollHeight*100;e(z,"horiz.pix",
q.rb,u.sd);e(A,"horiz.pct",q.qb,u.sd);e(B,"vert.pix",q.rb,u.Md);e(E,"vert.pct",q.qb,u.Md);Qg("sdl","pending",!1)}function h(){var x=250,z=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(x=50,z=!0);var B=0,A=!1,E=function(){A?B=Pi(E,x):(B=0,g(),Xi("sdl")&&!a()&&(hc(p,"scroll",J),hc(p,"resize",J),Qg("sdl","init",!1)));A=!1},J=function(){z&&y();B?A=!0:(B=Pi(E,x),Qg("sdl","pending",!0))};return J}function k(x,z,B){if(z){var A=b(String(x));Rg("sdl",B,function(E){for(var J=0;J<A.length;J++){var M=
String(A[J]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(z)}return E},{})}}function l(x){return Sg("sdl",x,{})}function m(x){G(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,A=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,J=x.vtp_verticalThresholdsPixels,M=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.rb:k(B,z,"horiz.pix");break;case q.qb:k(A,z,"horiz.pct")}switch(E){case q.rb:k(J,z,"vert.pix");break;case q.qb:k(M,
z,"vert.pct")}Xi("sdl")?Sg("sdl","pending")||(w||(d(),w=!0),G(function(){return g()})):(d(),w=!0,v&&(Yi("sdl"),Qg("sdl","pending",!0),G(function(){g();if(a()){var U=h();gc(p,"scroll",U);gc(p,"resize",U)}else Qg("sdl","init",!1)})))}var n=/^\s*$/,q={qb:"PERCENT",rb:"PIXELS"},u={Md:"vertical",sd:"horizontal"},p,t,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Ag(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;ze();R(b,function(){var d=X("google_trackConversion");if(qa(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Hj(a.vtp_customParams,
"key","value"));var g={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(g.value=a.vtp_eventValue),a.vtp_eventItems&&(g.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:ei()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);d(h)||c()}else c()},c)})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ld(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=W("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Qe(Re(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Si(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Og(c,"gtm.click");Ti(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Xi("cl")){var c=X("document");gc(c,"click",a,!0);Yi("cl")}G(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Vi(a.vtp_name,W("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=W("gtm.url",1);c=c||Qi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Si(String(c));var e=Re(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ua(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Qe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=Qe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Gc&&b.Kc>=b.Gc)b.Cc&&X("self").clearInterval(b.Cc);else{b.Kc++;var c=(new Date).getTime();Ti({event:b.ca,"gtm.timerId":b.Cc,"gtm.timerEventNumber":b.Kc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Gc,"gtm.timerStartTime":b.pe,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.pe,"gtm.triggers":b.Wg})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){G(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{ca:b.vtp_eventName,Kc:0,interval:Number(b.vtp_interval),Gc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Wg:String(b.vtp_uniqueTriggerId||"0"),pe:(new Date).getTime()};c.Cc=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(Hj(n.vtp_fieldsToSet,"fieldName","value"),g);C(Hj(n.vtp_contentGroup,"index","group"),h);C(Hj(n.vtp_dimension,"index","dimension"),k);C(Hj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=C(n);d=C(d,q)}C(Hj(d.vtp_fieldsToSet,"fieldName","value"),g);C(Hj(d.vtp_contentGroup,
"index","group"),h);C(Hj(d.vtp_dimension,"index","dimension"),k);C(Hj(d.vtp_metric,"index","metric"),l);var u=Ge(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+Zc(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&y("set",O+sa,K[sa])},B=function(){
var O=function(km,Ii,lm){if(!Pa(Ii))return!1;for(var bd=Ga(Object(Ii),lm,[]),Qf=0;bd&&Qf<bd.length;Qf++)y(km,bd[Qf]);return!!bd&&0<bd.length},K;if(d.vtp_useEcommerceDataLayer){var sa=!1;sa||(K=W("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!Pa(K))return;K=Object(K);var Eb=Ga(g,"currencyCode",K.currencyCode);
void 0!==Eb&&y("set","&cu",Eb);O("ec:addImpression",K,"impressions");if(O("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){y("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Za="refund purchase remove checkout checkout_option add click detail".split(" "),$a=0;$a<Ba.length;$a++){var jb=K[Ba[$a]];if(jb){O("ec:addProduct",jb,"products");y("ec:setAction",Ba[$a],jb.actionField);
if(td)for(var ub=0;ub<Za.length;ub++){var tc=K[Za[ub]];if(tc){tc!==jb&&I("GTM",13);break}}break}}},A=function(O,K,sa){var Eb=0;if(O)for(var Ba in O)if(O.hasOwnProperty(Ba)&&(sa&&v[Ba]||!sa&&void 0===v[Ba])){var Za=w[Ba]?Ca(O[Ba]):O[Ba];"anonymizeIp"!=Ba||Za||(Za=void 0);K[Ba]=Za;Eb++}return Eb},E={name:t};A(g,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",ei(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(g,J,!1)&&y("set",J);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var U={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||
e.value)};A(M,U,!1);y("send",U);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var oa=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:oa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ja="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ja})}M?y("send","pageview",M):y("send","pageview");d.vtp_autoLinkDomains&&He(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=Q("https:","http:","//www.google-analytics.com/"+ta,g&&g.forceSSL);R(ab,function(){var O=Ee();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return F.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<u.length;x++)if(0<=w.indexOf("//"+u[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!t){var x=X("document");t=x.location.protocol+"//"+x.location.hostname;x.location.port&&(t+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(t)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.ad)&&(w.setAttribute("data-gtm-yt-inspected-"+y.ad,"true"),d(w,y.ae))){w.id||(w.id=a());var x=X("YT"),z=x.get(w.id);z||(z=new x.Player(w.id));var B=h(z,y),A={},E;for(E in B)A.Na=E,B.hasOwnProperty(A.Na)&&z.addEventListener(A.Na,function(J){return function(M){return B[J.Na](M.data)}}(A)),A={Na:A.Na}}}
function g(w){G(function(){function y(){for(var z=x.getElementsByTagName("iframe"),B=z.length,A=0;A<B;A++)e(z[A],w)}var x=X("document");y();si(y)})}function h(w,y){var x,z;function B(){ha=Ni(function(){return{url:P,title:T,Xd:L,uf:w.getCurrentTime(),playbackRate:oa}},y.ad,w.getIframe());L=0;T=P="";oa=1;return A}function A(O){switch(O){case p.PLAYING:L=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();T=K?K.title:""}oa=w.getPlaybackRate();y.nf?ha.Ib("start"):ha.oc();
N=m(y.Cg,y.Bg,w.getDuration());return E(O);default:return A}}function E(){ja=w.getCurrentTime();ta=(new Date).getTime();ha.Mg();na();return J}function J(O){var K;switch(O){case p.ENDED:return U(O);case p.PAUSED:K="pause";case p.BUFFERING:var sa=w.getCurrentTime()-ja;K=1<Math.abs(((new Date).getTime()-ta)/1E3*oa-sa)?"seek":K||"buffering";w.getCurrentTime()&&(y.lf?ha.Ib(K):ha.oc());S();return M;case p.UNSTARTED:return B(O);default:return J}}function M(O){switch(O){case p.ENDED:return U(O);case p.PLAYING:return E(O);
case p.UNSTARTED:return B(O);default:return M}}function U(){for(;z;){var O=x;Oi(z);O()}y.kf&&ha.Ib("complete",1);return B(p.UNSTARTED)}function V(){}function S(){z&&(Oi(z),z=0,x=V)}function na(){if(N.length&&0!==oa){var O=-1,K;do{K=N[0];if(K.ra>w.getDuration())return;O=(K.ra-w.getCurrentTime())/oa;if(0>O&&(N.shift(),0===N.length))return}while(0>O);x=function(){z=0;x=V;0<N.length&&N[0].ra===K.ra&&(N.shift(),ha.Ib("progress",K.je,K.ne));na()};z=Pi(x,1E3*O)}}var ha,N=[],L,P,T,oa,ja,ta,ab=B(p.UNSTARTED);
z=0;x=V;return{onStateChange:function(O){ab=ab(O)},onPlaybackRateChange:function(O){ja=w.getCurrentTime();ta=(new Date).getTime();ha.oc();oa=O;S();na()}}}function k(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||100<A||0>A||z.push(A/100)}z.sort(function(E,J){return E-J});return z}function l(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||0>A||z.push(A)}z.sort(function(E,J){return E-J});return z}function m(w,y,x){var z=
w.map(function(E){return{ra:E,ne:E,je:void 0}});if(!y.length)return z;var B=y.map(function(E){return{ra:E*x,ne:void 0,je:E}});if(!z.length)return B;var A=z.concat(B);A.sort(function(E,J){return E.ra-J.ra});return A}function n(w){w.vtp_triggerStartOption?q(w):qe(function(){q(w)})}function q(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,B=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||z||B.length||
A.length){var J={nf:y,kf:x,lf:z,Bg:B,Cg:A,ae:E,ad:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},M=X("YT"),U=function(){g(J)};G(w.vtp_gtmOnSuccess);if(M)M.ready&&M.ready(U);else{var V=X("onYouTubeIframeAPIReady");Ui("onYouTubeIframeAPIReady",function(){V&&V();U()});G(function(){for(var S=X("document"),na=S.getElementsByTagName("script"),ha=na.length,N=0;N<ha;N++){var L=na[N].getAttribute("src");if(b(L,"iframe_api")||b(L,"player_api"))return}for(var P=S.getElementsByTagName("iframe"),T=P.length,
oa=0;oa<T;oa++)if(!v&&d(P[oa],J.ae)){R("https://www.youtube.com/iframe_api");v=!0;break}})}}else G(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,v=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();


Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Eh())){Sh(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ja:void 0};Ph(m);Wh(["aw","dc"],m);ai(g,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Uh(a,q,u,p,n);}})}();


Z.a.aev=["google"],function(){function a(p,t){var v=Ld(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var B=q.shift();delete n[B]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(Qi());ua(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Gj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Qe(Re(p),"HOST",!0)}function g(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return ic(p,"value");case "button":return jc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)li(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&ic(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,jc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),B=Re(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Qe(B,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&ic(M,J)||v||""}return E;case "MD":var U=p.vtp_mdValue,V=b(t,"MD",zi);return U&&V?Ci(V,U)||
v:V||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=C(a),c=b;c[Gb.oa]=null;c[Gb.Ee]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Qi()}function b(g,h){gc(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Si(l),K:Ri(l)})})}function c(g,h){gc(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Si(l),K:Ri(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(qa(m))try{l[g]=function(n,q,u){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Si(Qi()),
K:Ri(Qi())})}}catch(n){}}function e(){var g={source:null,state:X("history").state||null,url:Si(Qi()),K:Ri(Qi())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.K!=h.K){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.K,"gtm.newUrlFragment":h.K,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Ti(m)}}}(function(g){Z.__hl=g;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(g){var h=X("self");if(!Xi("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Yi("hl")}G(g.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){ze();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:ei()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?W(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var B="DATA_LAYER"==v?W(x):k[y];z(B)&&q(w,B)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,R(p,g(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){try{D._bizo_data_partner_id=a.vtp_id,D._bizo_data_partner_title=a.vtp_title,D._bizo_data_partner_domain=a.vtp_domain,D._bizo_data_partner_company=a.vtp_company,D._bizo_data_partner_location=a.vtp_location,D._bizo_data_partner_employee_range=a.vtp_employeeRange,D._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,D._bizo_data_partner_email=a.vtp_email,R(Q("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){G(a.vtp_gtmOnFailure)}})}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.a.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=X(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var g={},h=function(k,l){void 0!==c[k]&&(g[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(g);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{R("//bat.bing.com/bat.js",
function(){var k=Cj(X("UET"),{ti:c.vtp_tagId,q:e});D[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){G(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Hj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.zone=[],function(){function a(q){for(var u=q.vtp_boundaries||[],p=0;p<u.length;p++)if(!u[p])return!1;return!0}function b(q){var u=Nc.s,p=u+":"+q.vtp_gtmTagId,t=W("gtm.uniqueEventId")||0,v=je(function(){return new h}),w=a(q),y=q.vtp_enableTypeRestrictions?q.vtp_whitelistedTypes.map(function(J){return J.typeId}):null;y=y&&Ka(y,g);if(v.registerZone(p,t,w,y))for(var x=q.vtp_childContainers.map(function(J){return J.publicId}),z=0;z<x.length;z++){var B=String(x[z]);if(v.registerChild(B,u,p)){var A=
0!==B.indexOf("GTM-");if(A){var E=function(J,M){Ti(arguments)};E("js",new Date);m?(E("config",B),l||Zi(B,A)):Df({},B)}else Zi(B,A)}}}var c={active:!1,isWhitelisted:function(){return!1}},d={active:!0,isWhitelisted:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},g={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.h={};this.i={}};h.prototype.checkState=function(q,u){var p=this.h[q];if(!p)return d;var t=this.checkState(p.ie,u);if(!t.active)return c;
for(var v=[],w=0;w<p.jd.length;w++){var y=this.i[p.jd[w]];y.gb(u)&&v.push(y)}return v.length?{active:!0,isWhitelisted:function(x,z){z=z||[];if(!t.isWhitelisted(x,z))return!1;for(var B=0;B<v.length;++B)if(v[B].isWhitelisted(x,z))return!0;return!1}}:c};h.prototype.unregisterChild=function(q){delete this.h[q]};h.prototype.registerZone=function(q,u,p,t){var v=this.i[q];if(v)return v.o(u,p),!1;if(!p)return!1;this.i[q]=new k(u,t);return!0};h.prototype.registerChild=function(q,u,p){var t=this.h[q];if(!t&&
Oc[q]||t&&t.ie!==u)return!1;if(t)return t.jd.push(p),!1;this.h[q]={ie:u,jd:[p]};return!0};var k=function(q,u){this.h=[{eventId:q,gb:!0}];this.i=null;if(u){this.i={};for(var p=0;p<u.length;p++)this.i[u[p]]=!0}};k.prototype.o=function(q,u){var p=this.h[this.h.length-1];q<=p.eventId||p.gb!=u&&this.h.push({eventId:q,gb:u})};k.prototype.gb=function(q){if(!this.h||0==this.h.length)return!1;for(var u=this.h.length-1;0<=u;u--)if(this.h[u].eventId<=q)return this.h[u].gb;return!1};k.prototype.isWhitelisted=
function(q,u){u=u||[];if(!this.i||e[q]||this.i[q])return!0;for(var p=0;p<u.length;++p)if(this.i[u[p]])return!0;return!1};var l=!1;var m=!0;var n=function(q){b(q);G(q.vtp_gtmOnSuccess)};Z.__zone=n;Z.__zone.b="zone";Z.__zone.g=!0;Z.__zone.priorityOverride=0}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,bc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){G(h)}}}var b=function(d,e,g){qe(function(){var h,k=Oc;k.postscribe||(k.postscribe=Yb);h=k.postscribe;var l={done:e},m=F.createElement("div");m.style.display="none";m.style.visibility="hidden";F.body.appendChild(m);try{h(m,d,l)}catch(n){G(g)}})};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,g=aj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Bc,k=g.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,kc(h),k,e)()}else Pi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();







Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(W("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!Fi(g.target)){h.has(e.sb)||h.set(e.sb,""+b());h.has(e.ic)||h.set(e.ic,""+b());var q=0;h.has(e.vb)&&(q=Number(h.get(e.vb)));q+=100;h.set(e.vb,""+q);if(q>=k){var u=Og(g.target,"gtm.elementVisibility",[h.uid]),p=Ei(g.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.ic));
u["gtm.visibleLastTime"]=Number(h.get(e.sb));Ti(u);l()}}}if(!h.has(e.Ua)&&(0==k&&m(),!h.has(e.Aa))){var n=X("self").setInterval(m,100);h.set(e.Ua,n)}}function d(g){g.has(e.Ua)&&(X("self").clearInterval(Number(g.get(e.Ua))),g.h(e.Ua))}var e={Ua:"polling-id-",ic:"first-on-screen-",sb:"recent-on-screen-",vb:"total-visible-time-",Aa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.h=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=oc(m)}catch(J){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=F.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var A=
new a(v[B],p);d(A)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Mi(w);0<v.length&&(w=Li(k,v,[u]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=u?x.has(e.Aa)||c(y,x,q,"ONCE"===t?function(){for(var z=0;z<v.length;z++){var B=new a(v[z],p);B.set(e.Aa,"1");d(B)}Mi(w);if(n&&ri)for(var A=0;A<ri.length;A++)ri[A]===h&&ri.splice(A,1)}:function(){x.set(e.Aa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===t&&x.has(e.Aa)&&(x.h(e.Aa),x.h(e.vb)),x.h(e.sb))}var l=g.vtp_selectorType,m;"ID"===l?m=String(g.vtp_elementId):
"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,q=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,u=(Number(g.vtp_onScreenRatio)||50)/100,p=g.vtp_uniqueTriggerId,t=g.vtp_firingFrequency,v=[],w=-1;h();n&&si(h);G(g.vtp_gtmOnSuccess)})}();

var hm={};hm.macro=function(a){if(Lg.nc.hasOwnProperty(a))return Lg.nc[a]},hm.onHtmlSuccess=Lg.Wd(!0),hm.onHtmlFailure=Lg.Wd(!1);hm.dataLayer=Ed;hm.callback=function(a){Xc.hasOwnProperty(a)&&qa(Xc[a])&&Xc[a]();delete Xc[a]};function im(){Oc[Nc.s]=hm;Ia(Yc,Z.a);xb=xb||Lg;yb=he}
function jm(){Gh.gtm_3pds=!0;Oc=D.google_tag_manager=D.google_tag_manager||{};if(Oc[Nc.s]){var a=Oc.zones;a&&a.unregisterChild(Nc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)sb.push(e[g]);for(var h=b.predicates||[],k=0;k<
h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(q)}vb=Z;wb=Aj;im();Kg();le=!1;me=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)oe();else{gc(F,"DOMContentLoaded",oe);gc(F,"readystatechange",oe);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&pe()}gc(D,"load",oe)}xg=!1;"complete"===F.readyState?zg():gc(D,
"load",zg);a:{if(!td)break a;D.setInterval(ud,864E5);}
Uc=(new Date).getTime();
}}jm();

})()
