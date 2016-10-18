var express = require('express');
var router = express.Router();
var pages = ["Home","About","Contact","Projects","Services"];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Deepak Sharma',
                     messege: 'Full Stack Developer Systems Analyst',
                     git: 'https://github.com/Dr-Deepak',
                     linkedin : 'https://www.linkedin.com/in/deepak-sharma-a71080121',
                   pages: pages });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About',
                      messege:'Deepak currently enrolled in second year of computer programmer analyst program. Have   ',
                        pages: pages});
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',

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
