!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist",t(t.s=0)}([function(e,t,o){"use strict";function n(){var e=new google.maps.Map(document.getElementById("map"),{center:{lat:38.889931,lng:-77.0435},zoom:14,mapTypeId:"roadmap"}),t=[{position:{lat:-15.78627,lng:27.913389},map:e,draggable:!0,title:"Jack Rose",icon:o},{position:{lat:38.8977,lng:-77.0365},map:e,draggable:!0,title:"White House",icon:o},{position:{lat:38.916625,lng:-77.03871},map:e,draggable:!0,title:"ThreeFifty Bakery and Coffee Bar",icon:o}],o="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";for(var n in t){new google.maps.Marker({position:t[n].position,map:e,draggable:!0,title:t[n].title,icon:o})}var r=document.getElementById("pac-input");$("#place_area").width("0%"),$("#map").width("100%");var s=new google.maps.places.SearchBox(r);e.controls[google.maps.ControlPosition.TOP_LEFT].push(r),e.addListener("bounds_changed",function(){s.setBounds(e.getBounds())});var t=[];s.addListener("places_changed",function(){if(a=s.getPlaces(),$("#side_info").hide(),ko.cleanNode(document.getElementById("place_area")),ko.applyBindings(new i,document.getElementById("place_area")),$("#place_area").width("20%"),$("#map").width("80%"),0!=a.length){t.forEach(function(e){e.setMap(null)}),t=[];var o=new google.maps.LatLngBounds;a.forEach(function(n){if(!n.geometry)return void console.log("Returned place contains no geometry");var a={url:n.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(25,25)};t.push(new google.maps.Marker({map:e,icon:a,title:n.name,position:n.geometry.location})),n.geometry.viewport?o.union(n.geometry.viewport):o.extend(n.geometry.location)}),e.fitBounds(o)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.initAutocomplete=n;var a,i=function(){var e,t=this;this.placeList=ko.observableArray([]),a.forEach(function(e){t.placeList.push(new r(e))}),this.currentPlace=ko.observable(this.placeList()[0]),this.wiki_content=ko.observable("no info"),this.wiki_url=ko.observable(""),this.wiki_title=ko.observable("ni info"),this.getCurrentPlace=function(){return this.currentPlace},this.setCurrentPlace=function(){$("#side_info").show(),t.currentPlace(this);var o=$("#selected").text();$("#side_info").show(),o=o.replace(/\s/g,"%20"),url="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+o,$.ajax({url:url+"&callback=?",type:"GET",dataType:"json",headers:{"Api-User-Agent":"Example/1.0"},cache:!0,success:function(o,n,a){var i=o.query.pages,r=Object.keys(i)[0],s=i[r].thumbnail.source,l=i[r].title;e=String(i[r].extract),t.wiki_content(e),t.wiki_url(s),t.wiki_title(l),console.log(e),console.log(s)},error:function(e,t,o){console.log("error",e,t,o)}})}},r=function(e){this.name=ko.observable(e.name),this.address=ko.observable(e.formatted_address)};window.initAutocomplete=n}]);