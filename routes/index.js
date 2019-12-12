var express = require('express');
var router = express.Router();
var USER = require('../database/persona');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/hello_world', function(req,res,next){
    res.status(200).json({
        msn:"Hello Worlds"
    });
});

router.get('/gpersona', async(req, res) => {
  var params = req.query;
  USER.find({}).limit(1000).sort({_id: 0}).exec((err,docs) => {
    res.status(200).json(docs);
    });
});

//must be token in there but, there's no time so fy :)

module.exports = router;
