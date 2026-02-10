module.exports = (app)  => {
   var mysql = require('mysql');

   var connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'portal_noticias'
   });


   connection.query('select * from noticias', function(erro, result) {
       res.send(result);
      });

      app.get('/noticias', function(req, res){
         res.render('noticias/noticias', {noticias : result});
      });
}