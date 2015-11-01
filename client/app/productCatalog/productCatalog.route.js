/**
 * Created by ascarbek on 28.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore')
        .run(['stateHelper', function(stateHelper) {
            stateHelper
                .addState('home', {
                    url: '/',
                    title: 'Product Catalog',
                    views: {
                        main: {
                            templateUrl: 'app/productCatalog/productCatalog.page.html',
                            controller: 'ProductCatalog as vm'
                        }
                    }
                });

        }]);
})();
