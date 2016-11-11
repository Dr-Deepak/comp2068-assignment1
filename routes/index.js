var express = require('express');
var router = express.Router();
var pages = ["Home","About","Contact","Projects","Services"];
//var skill= ["Systems Analyst","FullStack Developer","Business Analyst", "Mainframe Developer"];
var Git = 'https://github.com/Dr-Deepak';
var Linkd = 'https://www.linkedin.com/in/deepak-sharma-a71080121';

/* GET home page. */
router.get('/',
    function(req, res, next) {
        res.render('home', { title:'Deepak Sharma',
                          // skills: skill,
                           messege:"  ",
                               git:Git,
                          linkedin:Linkd,
                             pages:pages
                           }
        );
    }
);

/* GET about me page. */
router.get('/about',
    function(req, res, next) {
        res.render('about',
                            {
                                title:'About',
                              messege:'Deepak currently enrolled in second year of computer programmer analyst program. Have ',
                                  git:Git,
                             linkedin:Linkd,
                                pages:pages
                            }
        );
    }
);

/* GET contact me page */
router.get('/contact',
  function(req, res, next)
  {
    res.render('contact',
                          {
                                 title: 'Contact Me',
                                  git: Git,
                            linkedin : Linkd,
                                pages: pages
                          }
              );
  }
);

/* GET projects page. */
router.get('/projects',
    function(req, res, next) {
        res.render('projects',
                              {
                                 title: 'My Projects',
                                   git: Git,
                             linkedin : Linkd,
                               messege:'Work & College Projects',
                                 pages: pages
                              }
        );
    }
);

/* GET services page. */
router.get('/services',
  function(req, res, next) {
    res.render('services',
                          {
                                title: 'Services',
                                  git: Git,
                            linkedin : Linkd,
                              messege:'The Services I offer',
                                pages: pages
                          }
          );
  }
);

module.exports = router;
