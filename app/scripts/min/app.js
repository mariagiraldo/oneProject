function changeColor(t){var e=$(t).attr("color"),o=$(t).attr("element");$(o).css("background-color",e),console.log("change "+e+" element "+o)}var app=angular.module("app",["ngRoute"]);app.config(function(t){t.when("/home",{templateUrl:"views/home.html",controller:"t_indexCtrl"}).otherwise({redirectTo:"/home"})}),app.controller("t_indexCtrl",function(){console.log("t_indexCtrl")}),app.directive("sliderChangeBgc",function(){return{restrict:"E",transclude:!0,scope:{data1:"="},templateUrl:"views/ui-components/sliderChangeBgc.html",replace:!0}}),app.directive("access",function(){return{restrict:"E",transclude:!0,scope:{data:"="},templateUrl:"views/ui-components/access.html",replace:!0}}),app.directive("maps",function(){return{restrict:"E",transclude:!0,scope:{data:"="},templateUrl:"views/ui-components/maps.html",replace:!0}}),app.directive("boxInformationBgi",function(){return{restrict:"E",transclude:!0,scope:{title1:"@",title2:"@",title3:"@",icontext:"@",img:"@",classopacity:"@",class1:"@",class2:"@",class3:"@",class4:"@",type:"@"},templateUrl:"views/ui-components/boxInformationBgi.html",replace:!0,link:function(){console.log("boxInformationBgi")}}}),app.directive("sliderPlane",function(){return{restrict:"E",transclude:!0,scope:{title:"@",description:"@",options:"="},link:function(t){console.log("link slide plane "),t.data={articles:[{title1:"CELEBRATION",title2:"Sensual",img:"resources/img/article1.jpg",icontext:"&",class1:"title title1 font-monteserrat",class2:"title  fonts-roboto icon-text",class3:"title title2 fonts-roboto",classopacity:"red"},{title1:"Beauty",title2:"for two",title3:"THIS MONTH, WE GIVE YOU A BEAUTY SESSION FOR THE PURCHASE ANOTHER THER. 70C.",img:"resources/img/article2.jpg",class1:"font-droid-serif f60 fw500 t1",class3:"title f22 fonts-roboto t2 ls2 ",class4:"title t3 f18 ls4",classopacity:"green-1"},{title1:"ESCAPADA",title2:"ACTIVA'T 20C.",img:"resources/img/article3.jpg",class1:"title title1 font-monteserrat",class3:"title  fonts-roboto t4 ",classopacity:"violet"},{title1:"nombre articulo",title2:"",title3:"tedakl{sdnma{fls",img:"resources/img/article4.jpg",classopacity:"blue"},{maps:"<maps></maps>"},{sci:"<slider-change-information></slider-change-information>"}]},console.log(t)},templateUrl:"views/ui-components/sliderPlane.html",replace:!0}}),app.directive("boxMaps",function(){return{restrict:"E",transclude:!0,scope:{type:"@"},templateUrl:"views/ui-components/boxMaps.html",replace:!0,link:function(){console.log("boxMaps")}}}),app.directive("sliderChangeInformation",function(){return{restrict:"E",transclude:!0,scope:{type:"@"},templateUrl:"views/ui-components/sliderChangeInformation.html",replace:!0,link:function(){console.log("boxMaps")}}});