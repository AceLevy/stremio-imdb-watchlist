// require serverless version
const app = require('./index.js')

// create local server
serverPort = (process.env.PORT || 7505)

app.listen(serverPort, function () {
    console.log('Addon active on port ' + serverPort + '.');
    console.log('http://127.0.0.1:'+serverPort+'/[imdb-user-id]/manifest.json');
});
