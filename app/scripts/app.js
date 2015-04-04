'use strict';

var appModule = angular.module("app", ['ngAnimate', 'ui.router', 'controllers']);

appModule.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('main', {
            url: '/main',
            templateUrl: '../views/front/main.html',
            controller: 'dataLsController'
        }) .state('main.idx', {
                url: '/idx',
                templateUrl: '../views/front/mainIdx.html',
                controller: 'mainIdxController'
            })
            .state('main.gameLs', {
                url: '/gameLs',
                templateUrl: '../views/front/mainGameLs.html'
                //controller: 'mainIdxController'
            })
            .state('main.gameNews', {
                url: '/gameNews',
                templateUrl: '../views/front/mainGameNews.html'
                //controller: 'mainIdxController'
            })
            .state('main.gameDetail', {
                url: '/gameDetail/:gameid',
                templateUrl: '../views/front/gameDetail.html',
                controller: 'gameDetailController'
            });
        /*state('main.content',{
         url: '/:content',
         templateUrl: function($stateParams){
         console.log($stateParams.content);
         }
         })*/


        $urlRouterProvider.otherwise('/main/idx');

    }]);
