angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("/scripts/templates/navigation-buttons.html","<div><button class=\"btn btn-default\" ng-disabled=\"stage == 1\" ng-click=moveBackward()><span class=\"glyphicon glyphicon-chevron-left\"></span>Back</button> <button class=\"btn btn-primary\" ng-disabled=\"stage == 3\" ng-click=moveForward()>Forward <span class=\"glyphicon glyphicon-chevron-right\"></span></button></div>");
$templateCache.put("/scripts/templates/slide-edit-panel.html","<div><img ng-src={{slide.url}} height=100 width=100> <label>Caption <input ng-model=slide.caption placeholder=Caption></label> <button class=\"btn btn-sm btn-danger\" ng-click=\"slides.full.splice($index, 1)\">Delete</button></div>");
$templateCache.put("/scripts/templates/slide-editing-tile.html","<div ng-repeat=\"slide in slides.full\" ng-include=\"\'/scripts/templates/slide-edit-panel.html\'\" class=slide-edit-panel></div>");
$templateCache.put("/scripts/templates/slider.html","<slider slides=slides.full></slider>");
$templateCache.put("/scripts/templates/url-input.html","<div><p>Please enter urls for images, separated by comma.</p><textarea ng-model=slides.urlstring class=url-textarea></textarea></div>");
$templateCache.put("/scripts/directives/slider/sliderTemplate.html","<div class=slider-container><div class=slider><ul></ul></div><div class=\"glyphicon glyphicon-chevron-left slider-left-arrow\"></div><div class=\"glyphicon glyphicon-chevron-right slider-right-arrow\"></div></div>");}]);