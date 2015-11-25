/**
 * Created by ascarbek on 28.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore')
        .run(['lsState', function(lsState) {
            lsState
                .addState('home', {
                    url: '/',
                    title: 'Product Catalog',
                    views: {
                        main: {
                            templateUrl: '/app/ProductCatalog/ProductCatalog.page.html',
                            controller: 'ProductCatalog as vm'
                        }
                    }
                });

        }]);
})();
