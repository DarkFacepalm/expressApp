var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Corlate' });
});

router.get('/index', function(req, res, next) {
    res.redirect('/');
});

router.get('/about-us', function(req, res, next) {
 res.render('about-us', { title: 'About Us | Corlate' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services | Corlate' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio | Corlate' });
});

router.get('/blog-item', function(req, res, next) {
    res.render('blog-item', { title: 'Blog Single | Corlate' });
});

router.get('/pricing', function(req, res, next) {
    res.render('pricing', { title: 'Pricing | Corlate' });
});

router.get('/404', function(req, res, next) {
    res.render('404', { title: '404 | Corlate' });
});

router.get('/shortcodes', function(req, res, next) {
    res.render('shortcodes', { title: 'Shortcodes | Corlate' });
});

router.get('/blog', function(req, res, next) {
    res.render('blog', { title: 'Blog | Corlate' });
});

router.get('/contact-us', function(req, res, next) {
    res.render('contact-us', { title: 'Contact Us | Corlate' });
});

module.exports = router;
