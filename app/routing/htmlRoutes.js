//require path
let path = require('path');

//export paths for url 
module.exports = function (app) {
    //rout to survey.html
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../app/public/survey.html'));
    });
    //rout to home.html
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../app/public/home.html'));
    });



};