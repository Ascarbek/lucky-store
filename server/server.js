var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var app = module.exports = loopback();
var favicon = require('serve-favicon');

app.start = function() {
    // start the web server
    return app.listen(function() {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;
    app.use('/favicon.ico', loopback.static(path.resolve(__dirname, '..', 'favicon.ico')));

    app.use('/app', loopback.static(path.resolve(__dirname, '..', 'client/app')));
    app.use('/content', loopback.static(path.resolve(__dirname, '..', 'client/content')));
    app.use('/vendor', loopback.static(path.resolve(__dirname, '..', 'client/vendor')));

    app.all('*', function(req, res, next) {
        // Handle the RESP API
        if(req.path.substr(0,4) === '/api'){
            return next();
        }
        // Just send the index.html for other files to support HTML5Mode
        res.sendFile('index.html', { root: path.resolve(__dirname, '..', 'client') });
    });

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});
