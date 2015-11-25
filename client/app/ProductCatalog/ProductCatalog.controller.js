/**
 * Created by Ascarbek on 27.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore.controllers')
        .controller('ProductCatalog', ['$scope', 'svcProductCatalog', function($scope, svcProductCatalog){
            var vm = this;

            vm.preview = function(product){
                console.log('opening preview... ', product);
            };

            vm.addToCart = function(product){
                console.log('adding to cart...', product);
            };

            vm.products = svcProductCatalog.getProducts();
        }]);

})();
