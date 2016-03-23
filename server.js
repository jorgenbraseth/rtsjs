var connect = require('connect');
var serveStatic = require('serve-static');

// when on Heroku, port will be exported to an environment variable
// and available as process.env.PORT
var port = process.env.PORT || CONFIG.port;

connect().use(serveStatic(__dirname+"/build/")).listen(port);
