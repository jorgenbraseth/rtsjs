var connect = require('connect');
var serveStatic = require('serve-static');

// when on Heroku, port will be exported to an environment variable
// and available as process.env.PORT
var port = process.env.PORT || 8080;

console.log(__dirname);

var app = connect().use(serveStatic("./build/"));
app.listen(port);
