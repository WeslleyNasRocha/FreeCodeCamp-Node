var net = require("net");
var date;

var server = net.createServer(function (socket) {

    date = new Date(Date.now());
    var response = date.getFullYear() + "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + date.getDate()).slice(-2) + " " +
        ("0" + date.getHours()).slice(-2) + ":" +
        ("0" + date.getMinutes()).slice(-2) + "\n";
    console.log(response);
    socket.end(response);
})

server.listen(process.argv[2])
