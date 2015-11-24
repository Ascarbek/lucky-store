/**
 * Created by Ascarbek on 26.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore', ['ui.router', 'LuckyStore.controllers', 'LuckyStore.directives', 'LuckyStore.services', 'angular-carousel', 'ngAnimate', 'ui.mask'])
        .controller('AppCtrl', ['$scope', '$rootScope', '$log', 'siteData', function($scope, $rootScope, $log, siteData){

            this.siteNavigationItems = siteData.getSiteNavigationItems();

        }]);

    angular.module('LuckyStore.controllers', []);
    angular.module('LuckyStore.directives', []);
    angular.module('LuckyStore.services', []);
})();

