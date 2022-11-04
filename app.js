var Reader = require('./Reader.js');
var Process = require('./Process.js');
var Table = require('./Table.js')
var HtmlParser = require('./HtmlParser.js')
var Write = require('./Writter')
var pdfWrite = require('./PdfWritter')

var Leitor = new Reader;
var Escritor = new Write;

async function main () {
    
    var dados = await Leitor.Read('./user.csv');
    var pros =  Process.Process(dados);
    var table = new Table(pros);
    var html = await HtmlParser.Parse(table);
    Escritor.Write(Date.now()+'.html',html);
    pdfWrite.WritePDF(Date.now()+'.pdf',html);
}
main()