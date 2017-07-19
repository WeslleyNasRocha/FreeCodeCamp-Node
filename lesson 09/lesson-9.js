var http = require("http");
var bl = require("bl");
var r = [];
var count = 0;

function getHttp(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) throw err;

            r[index] = data.toString();

            count++;

            if (count === 3) {
                for (var i = 0; i < 3; i++) {
                    console.log(r[i]);
                }
            }
        }));
    });
}

for (var i = 0; i < 3; i++) {
    getHttp(i);
}
