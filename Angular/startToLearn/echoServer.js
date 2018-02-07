var http = require("http");
var url = require("url");

var server = new http.Server(function(req, res){ //req - взодящий запрос, инф кот. присылает браузер; res - ответ
	console.log(req.method, req.url);

	var urlParsed = url.parse(req.url, true);
	console.log(urlParsed);

	if(urlParsed.pathname == '/echo' && urlParsed.query.message)
		res.end(urlParsed.query.message)
	else{
		res.statusCode = 404;
		res.end("Page is not found");
	}
}); //EventEmitter

server.listen(1337, '127.0.0.1');
 
 