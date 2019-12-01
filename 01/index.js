var fs = require('fs');

class RocketEquation {
    description = "Divide by three, round down. "
    constructor() {

    }
    run() {
        let content = fs.readFileSync(__dirname + "/" +"input.dat", "utf8");
        let data = content.split("\n");
        let results = data.map(function(num) {
            let  i = Number(num);
            let ret = Math.floor(i/3) - 2;
            if(ret < 0) {
                console.log(num + " suspicious, gave: " + ret);
                return 0;
            }
            return ret;
        });
        let total = results.reduce(function(i, accumulator) {
            return i + accumulator;
        });
        console.log("Part1: " + total);

        results = data.map(function(num) {
            let  i = Number(num);
            let accumulated = 0;
            let added = 0;
            do {
                added = Math.floor(i/3) - 2;
                if(added > 0) {
                    accumulated += added;
                    i = added;
                }
            } while(added > 0)
            return accumulated;
        });
        total = results.reduce(function(i, accumulator) {
            return i + accumulator;
        });
        console.log("Part2: " + total);
    }
}

module.exports = RocketEquation;