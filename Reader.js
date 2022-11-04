const fs = require('fs');
const util = require('util');


//var novafunction = util.promisify(funcaocallback)
class Reader{

    constructor () {
        this.reder = util.promisify(fs.readFile);
    }
    async Read(filepath){
        try {
            return await this.reder(filepath,'utf8')
        }catch{
            return undefined;
        }
        
       
    }
}


module.exports = Reader;