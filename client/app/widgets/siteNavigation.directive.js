/**
 * Created by Ascarbek on 26.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore.directives')
        .directive('lsSiteNavigation', [function(){
            return {
                restrict: 'E',
                scope : {
                    items : '=',
                    onSignIn : '&onSignIn',
                    onSignUp : '&onSignUp'
                },
                link: function(scope, element, attrs){
                    
                },
                templateUrl : 'app/widgets/siteNavigation.template.html'
            }
        }]);
})();
