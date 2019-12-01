const fs = require('fs');

dd = fs.opendirSync(".");
r = /\d+/;
dirs = [];
while(d = dd.readSync()) {
    if(r.exec(d.name)) {
        dirs.push(d.name);
    }
}
dirs.sort();
dirs.forEach(function(d) {
    Mod = require(__dirname + '/' + d);
    m = new Mod();
    console.log("Running: " +d);
    console.log(m.description)
    m.run();
});