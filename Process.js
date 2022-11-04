class Processor {
    static Process(data){
        var c = data.split('\r\n'); 
        var rows = []
        c.forEach(row  => {
            var arr = row.split(',');
            rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;