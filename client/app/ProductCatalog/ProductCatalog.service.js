/**
 * Created by ascarbek on 28.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore.services')
        .factory('svcProductCatalog', [function(){
            var service = {
                getProducts : getProducts
            };

            return service;

            function getProducts(){
                return [
                    { id : 1, name : 'Digital Air Fryer', picture : 'content/image/product/product_1_thumb.png', price : '95' },
                    { id : 2, name : 'Digital Air Fryer', picture : 'content/image/product/product_1_thumb.png', price : '95' },
                    { id : 3, name : 'Titanium 7-pc set', picture : 'content/image/product/product_2_thumb.png', price : '84' },
                    { id : 4, name : 'Titanium 7-pc set', picture : 'content/image/product/product_2_thumb.png', price : '84' },
                    { id : 5, name : 'Helida Sweater', picture : 'content/image/product/product_3_thumb.png', price : '39' },
                    { id : 6, name : 'Super Star Bag', picture : 'content/image/product/product_4_thumb.png', price : '75' }
                ]
            }
        }]);
})();
