var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
    var rs = fs.createReadStream(process.argv[3]);
    rs.pipe(response);
})

server.listen(process.argv[2]);
