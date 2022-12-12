var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
// A constante __dirname retorna o diretório raiz da aplicação.
fs.readFile('condominio/index.html', function(err, html){

response.write(html);
response.end();
});
});
server.listen(3000, function(){
console.log('Executando Site Pessoal');
});