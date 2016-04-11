!function(){"use strict";angular.module("remixMobile",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"Drums",logo:"eq-icon.png"},{title:"Melody",logo:"melody-icon.png"},{title:"Bass",logo:"bass-icon.png"},{title:"Percussion",logo:"effects-icon.png"},{title:"Vocal",logo:"vocal-icon.png"},{title:"SFX",logo:"random-icon.png"}];this.getTec=t}angular.module("remixMobile").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("remixMobile").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,a,n,o){var r,i=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}function a(t,e){function a(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return n}t.$inject=["malarkey"],angular.module("remixMobile").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function a(a){function o(t){return t.data}function r(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return a||(a=30),e.get(n+"/contributors?per_page="+a).then(o)["catch"](r)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:n,getContributors:a};return o}t.$inject=["$log","$http"],angular.module("remixMobile").factory("githubContributor",t)}(),function(){"use strict";function t(t,e,a){function n(){r(),t(function(){i.classAnimation="rubberBand"},4e3)}function o(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function r(){i.awesomeThings=e.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1459197208564,i.showToastr=o,n()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("remixMobile").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("remixMobile").run(t)}(),function(){"use strict";function t(t){t.when("/home",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/",{templateUrl:"app/main/intro-page.html",controller:"MainController"}).when("/outro",{templateUrl:"app/main/outro-page.html",controller:"MainController"}).otherwise({redirectTo:"/"})}t.$inject=["$routeProvider"],angular.module("remixMobile").config(t)}(),function(){"use strict";angular.module("remixMobile").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("remixMobile").config(t)}(),angular.module("remixMobile").run(["$templateCache",function(t){t.put("app/main/intro-page.html",'<html><body><div class="container-fluid"><div class="row"><div class="smirnoff-logo"><div class="welcome-text-padding"><h3 class="text-center text-danger"><strong>REMIX</strong></h3><p class="col-md-2 text-center space-between-text">Welcome to the Remix, enter the 4 digit code on the large screen to get started</p></div><div class="container"><form><div class="form-group"><label for="inputPassword">Password</label> <input type="password" class="form-control" id"inputpassword"="" placeholder="Password"></div></form><a href="#home" role="button" class="btn btn-danger button-padding">Enter</a></div><div class="powered-by-text"><p class="col-md-2 text-center text-whitey-tighty">Powered By</p><h5 class="text-center text-whitey-tighty"><strong>DRASTIC.IO</strong></h5></div></div></div></div></body></html>'),t.put("app/main/main.html",'<html ng-controller="remixMobile"><body><div class="container-fluid background-fill"><div class="row-fluid body"><div class="thumbnail col-xs-6 col-sm-6 col-md-6" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'order\'"><img class="pull-right center-block" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption bottom-align-text text-center"><a href="#outro" type=\'button"\'>{{ awesomeThing.title }}</a><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></body></html>'),t.put("app/main/outro-page.html",'<div class="container-fluid"><div class="row"><div class="smirnoff-logo background-endscreen"><div class="smirnoff-logo"><div class="welcome-text-padding"><h3 class="text-center text-danger"><strong>REMIX</strong></h3><h1 class="col-md-2 text-center space-between-text"><strong>Nice Job!</strong></h1><h6 class="col-md-2 text-center space-between-text">Sharing your remix is as easy as logging into your Twitter or Facebook below</h6><p class="col-md-2 text-center space-between-text"><strong>Share</strong></p></div><span class="fa-stack fa-5x"><i class="fa fa-circle fa-stack-2x" style="color: #DB1F44;"></i> <i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span> <span class="fa-stack fa-5x"><i class="fa fa-circle fa-stack-2x" style="color: #DB1F44;"></i> <i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-403c5c3543.js.map
