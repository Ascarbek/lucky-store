/**
 * Created by Ascarbek on 26.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore', ['ui.router', 'LuckyStore.controllers', 'LuckyStore.directives', 'LuckyStore.services', 'angular-carousel', 'ngAnimate', 'ui.mask'])
        .controller('AppCtrl', ['$scope', '$rootScope', '$log', 'core', function($scope, $rootScope, $log, core){

            this.siteNavigationItems = core.getSiteNavigationItems();

        }]);

    angular.module('LuckyStore.controllers', []);
    angular.module('LuckyStore.directives', []);
    angular.module('LuckyStore.services', []);
})();

