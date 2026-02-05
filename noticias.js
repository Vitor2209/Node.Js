var http = requere('http');

var server = http.createServer(function(req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('<html><body>Noticias de tecnologia</body></html>');

    } else if (categoria == '/moda') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end('<html><body>Noticias de moda</body></html>');

    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end('<html><body>Página não encontrada</body></html>');
    }

    res.end('<html><body>Noticias de moda</body></html>');

}).listen(3000);

