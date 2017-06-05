var fs = require("fs");

fs.readFile(process.argv[2],"utf8",function callback(err, data){
    if (err) {
        return console.log(err)
    }

        var lines = datalines.split('\n').length - 1;
        console.log(lines)

})