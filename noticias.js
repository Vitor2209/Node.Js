module.exports = function(app) {
     application.get('/noticias', function(req, res) {
        res.render('noticias/noticias');
     });
};