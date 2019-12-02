var fs = require('fs');

class ProgramAlarm {
    description = "Intcode computer."
    constructor() {
        this.reload();
    }
    reload() {
        this.data = fs.readFileSync(__dirname + '/' + 'input.dat', "utf8");
        this.instructions = this.data.split(",");
        this.instructions = this.instructions.map( n => Number(n))
    }
    run() {
        var self = this;
        console.log("Part 1: " + this.compute(this.instructions));
        let tulo = 0;
        for(let i=0;i < 100;i++) {
            console.log(i);
            for(let j=0;j < 100;j++) {
                self.reload();
                this.instructions[1] = i;
                this.instructions[2] = j;
                tulo = this.compute(this.instructions);
                if(tulo === 19690720) {
                    console.log("Part 2: " + (100 * i + j));
                    break;
                }
            }
            if(tulo === 19690720) {
                break;
            }
        }
        console.log('Done!');
    }

    compute(inst) {
        let ip = 0;
        let running = true;
        while(running)  {
            let i = inst[ip++];
            switch(i) {
                case 1:
                    let a = inst[inst[ip++]];
                    let b = inst[inst[ip++]];
                    inst[inst[ip++]] = a + b;
                    break;
                case 2:
                    let ax = inst[inst[ip++]];
                    let bx = inst[inst[ip++]];
                    inst[inst[ip++]] = ax * bx;
                    break;
                case 99:
                    running = false
                    break;
            }
        }
        return inst[0];
    }
}

module.exports = ProgramAlarm;