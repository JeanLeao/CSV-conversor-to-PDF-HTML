const fs = require('fs');
const util = require('util');

class Writter{

    constructor(){
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(filename,data){
        try{
            return await this.writer(filename,data);
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = Writter;