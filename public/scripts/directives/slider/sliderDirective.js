(function() {

    'use strict';

    angular.module('app').directive("slider", Slider);

    Slider.$inject = [];

    function Slider(){
    	return {
    		templateUrl: "/scripts/directives/slider/sliderTemplate.html",

    		scope: {
    			slides: "=",
    		},

    		link: function(scope, el, attrs){
                var ul = el.find("ul");

    			angular.forEach(scope.slides, function(item, index){
    				var slide = angular.element("<li></li>");
                    var img = angular.element("<img src='" + item.url + "'>");
    				var caption = angular.element("<p></p>");
                    caption.html(item.caption);
                    img.addClass("slider-image");
                    caption.addClass("slider-caption");
                    $(slide).append(img)
                            .append(caption);
    				$(ul).append(slide)
    			});

                var lis = ul.children();
                ul[0].style.width = (lis.length * lis[0].clientWidth) + "px";

                var currentIndex = 0;

                function goTo(index) {
                  if (index < 0 || index > lis.length - 1)
                    return;

                  ul[0].style.left = '-' + (100 * index) + '%';
             
                  currentIndex = index;
                }
                 
                function goToPrev() {
                  goTo(currentIndex - 1)
                }
                 
                function goToNext() {
                  goTo(currentIndex + 1)
                }

                document.getElementsByClassName("slider-left-arrow")[0].addEventListener("click", goToPrev);
                document.getElementsByClassName("slider-right-arrow")[0].addEventListener("click", goToNext);
    		}
    	}
    }

})();