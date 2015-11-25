/**
 * Created by Ascarbek on 27.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore.directives')
        .directive('lsSiteFooter', [function(){
            return {
                restrict : 'A',
                scope : {

                },
                link : function(scope, element, attrs){

                },
                templateUrl : '/app/widgets/siteFooter.template.html'
            }
        }]);
})();
