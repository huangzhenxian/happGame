'use strict';

var appController = angular.module('controllers', []);

appController.controller('dataLsController', function ($scope, $http) {
    $http.get("scripts/data/dataLs/newsLs.json").success(function (datas) {
        $scope.newsLs = datas;
    });
});

appController.controller('mainIdxController', function ($scope, $http) {
    $http.get('scripts/data/dataLs/gameLs.json').success(function (data) {
        $scope.gameLs = data;
    });
    $http.get("scripts/data/dataLs/newsLs.json").success(function (datas) {
        $scope.newsLs = datas;
    });

    appController.controller('detailController', function ($scope, $stateParams) {
        $scope.dataName = $stateParams.name;

    });

    appController.controller('gameDetailController', function ($scope, $stateParams) {
        console.log($stateParams.gameid);
    });

});
