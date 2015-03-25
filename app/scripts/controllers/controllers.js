'use strict';

var appController = angular.module('controllers',[]);

appController.controller('dataLsController', function ($scope,$http) {
    $http.get("scripts/data/data1.json").success(function(datas){
    	$scope.datas = datas;
  	});
	//console.log($http);

	$scope.orderParm = "info";  
});

appController.controller('detailController',function ($scope,$stateParams){
	$scope.dataName = $stateParams.name;
	
});

appController.controller('gameDetailController',function ($scope,$stateParams){
	console.log($stateParams.gameid);
});
appController.controller('mainIdxController',function ($scope,$stateParams){
	//console.log("mainIdx");
});
