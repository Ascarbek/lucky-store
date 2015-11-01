/**
 * Created by Ascarbek on 27.10.2015.
 */
(function (){
    'use strict';

    angular
        .module('LuckyStore.services')
        .factory('siteData', [function (){
            var service = {
                getSiteNavigationItems : getSiteNavigationItems
            };

            return service;

            function getSiteNavigationItems(){
                return [
                    { name : 'Men',      items : ['Jackets'], sref : 'home' },
                    { name : 'Women',    items : [], sref : 'home' },
                    { name : 'Sale!',    items : [], sref : 'home' },
                    { name : 'Info',     items : [], sref : 'home' },
                    { name : 'Contacts', items : [], sref : 'about' }
                ];
            }
        }]);

})();
