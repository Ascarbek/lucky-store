/**
 * Created by ascarbek on 28.10.2015.
 */
(function(){
    'use strict';

    angular
        .module('LuckyStore')
        .run(['lsState', function(stateHelper) {
            stateHelper
                .addState('about', {
                    url: '/about',
                    title: 'About',
                    views: {
                        main: {
                            templateUrl: 'app/about/about.page.html',
                            controller: 'About as vm'
                        }
                    }
                });

        }]);
})();
