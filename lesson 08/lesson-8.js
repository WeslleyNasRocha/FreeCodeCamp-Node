var http = require("http");
var bl = require("bl");

var a;

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            throw err;
        }
        data = data.toString()
        console.log(data.length)
        console.log(data);
    }))
});
