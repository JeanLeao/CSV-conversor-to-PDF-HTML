class Table {
    constructor (arr){
        this.header = arr[0]
        arr.shift();
        this.body = arr;
    }

   get rowCount(){ // ATRIBUTO
        return this.body.length;
    }

    get columCount(){ 
        return this.header.length;
    }
}

module.exports = Table;