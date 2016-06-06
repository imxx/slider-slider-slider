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
                var slidesData = scope.slides,
                    slidesLength = slidesData.length,
                    slidesHtml = new Array(slidesData.length),
                    currentIndex = { value: 0},
                    ul = el.find("ul"),
                    ulWidth,
                    i;

                for(i = 0; i < slidesLength; i++){
                    slidesHtml[i] = [
                        "<li>",
                            "<img class='slider-image' src='", slidesData[i].url, "'>",
                            "<p class='slider-caption'>", 
                                slidesData[i].caption || "",
                            "</p>",
                        "</li>"
                    ].join("");
                }

                ul[0].innerHTML = slidesHtml.join("");

                ulWidth = slidesData.length * ul.find("li")[0].clientWidth;
                ul[0].style.width = ulWidth + "px";

                el[0].querySelector(".slider-left-arrow")
                     .addEventListener("click", goToPrev.bind(null, currentIndex, ul, slidesLength));

                el[0].querySelector(".slider-right-arrow")
                     .addEventListener("click", goToNext.bind(null, currentIndex, ul, slidesLength));
            }
        }
        
        /*
		* @param index 		  index of slide to be visible
		* @param currentIndex index of current slide
		* @param ul			  list of slides
		* @param length		  number of slides
		*/
        function goTo(index, currentIndex, ul, length) {
            if (index < 0 || index > length - 1)
                return;

            ul[0].style.left = '-' + (100 * index) + '%';

            currentIndex.value = index;
        }

        function goToPrev(currentIndex, ul, length) {
            goTo(currentIndex.value - 1, currentIndex, ul, length)
        }

        function goToNext(currentIndex, ul, length) {
            goTo(currentIndex.value + 1, currentIndex, ul, length)
        }
    }

})();