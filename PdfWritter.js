const pdf = require('html-pdf');

class PdfWritter{
    static WritePDF(filename,html){
        pdf.create(html,{}).toFile(filename, (err) => {});
    }
}


module.exports = PdfWritter;