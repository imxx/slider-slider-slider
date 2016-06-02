(function() {

    'use strict';

    angular.module('app').controller("MainCtrl", MainCtrl);

    MainCtrl.$inject = ["$scope"];

    function MainCtrl($scope) {
    	$scope.stage = 1;
    	$scope.slides = {
    		urlstring: "",
    		full: []
    	};
    	$scope.moveForward = moveForward;
    	$scope.moveBackward = moveBackward;

    	function moveForward(){
    		if($scope.stage == 3)
    			return;
    		else{
    			if($scope.stage == 1)
    				convertToObjects();
    			$scope.stage++;
    		}
    	}

    	function moveBackward(){
    		if($scope.stage == 1)
    			return;
    		else
    			$scope.stage--;
    	}

    	function convertToObjects(){
    		var urlsArray = $scope.slides.urlstring.replace(/^\[|\]$|'|"|\r\n|\n/ig, "").split(",");
    		$scope.slides.full = [];
    		angular.forEach(urlsArray, function(el){
    			$scope.slides.full.push({ url: el });
    		});
    	}

    }

})();
