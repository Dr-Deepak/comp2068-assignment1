var express = require('express');
var router = express.Router();
var pages = ["Home","About","Contact","Projects","Services"];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home Page',
                     messege: 'This is my HomePage',
                   pages: pages });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me',
                      messege:'This is me',
                        pages: pages});
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
phone : '647-606-4530',
email : 'deepak.sharmacpa@gmail.com',
git: 'www.github.com/Dr-Deepak/',
linkedin : 'www.linkedin.com/in/deepak-sharma-a71080121',
  pages: pages });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
  messege:'These are my Projects',
    pages: pages});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',
  messege:'The Services I offer',
    pages: pages });
});
module.exports = router;
