/**
 * Created by Ascarbek on 26.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore', ['ui.router', 'LuckyStore.controllers', 'LuckyStore.directives', 'LuckyStore.services', 'angular-carousel', 'ngAnimate', 'ui.mask'])
        .controller('AppCtrl', ['$scope', '$rootScope', '$log', 'siteData', function($scope, $rootScope, $log, siteData){

            this.siteNavigationItems = siteData.getSiteNavigationItems();

            this.signIn = function(){
                console.log('signing in...');
            };

            this.signUp = function(){
                console.log('signing up...');
            };

        }]);

    angular.module('LuckyStore.controllers', []);
    angular.module('LuckyStore.directives', []);
    angular.module('LuckyStore.services', []);
})();

