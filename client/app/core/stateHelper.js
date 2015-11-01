/**
 * Created by Ascarbek on 26.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore')
        .provider('stateHelper', ['$stateProvider', function($stateProvider){
            this.$get = function(){
                return {
                    addState : function(name, config){
                        $stateProvider
                            .state(name, config);
                    }
                }
            }
        }])
        .config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider){
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            $urlRouterProvider.otherwise('/');

        }]);
})();
