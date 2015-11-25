/**
 * Created by Ascarbek on 25.11.2015.
 */
var app = require('../server');
var dataSource = app.dataSources.db;

dataSource.autoupdate('newModel', function(err) {

    if (!err) {
        console.log('newModel table created');
    } else {
        console.log('-- newModel table not created');
    }

});
