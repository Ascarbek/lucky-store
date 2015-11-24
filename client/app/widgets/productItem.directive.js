/**
 * Created by Ascarbek on 27.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore.directives')
        .directive('lsProductItem', [function(){
            return {
                restrict: 'E',
                scope : {
                    itemName : '=',
                    itemPicture : '=',
                    itemPrice : '=',
                    itemOldPrice : '=',
                    onPreview : '&',
                    onAddToCart : '&',
                    badge : '=' // New, Sale, Hot
                },
                link: function(scope, element, attrs){

                },
                templateUrl : 'app/widgets/productItem.template.html'
            }
        }]);
})();
