var express = require('express');
var router = express.Router();
const messages=[
  {
    text:"hi dear",
    user:"sehaj",
    added:new Date()
  },
  {
    text:"hi",
    user:"rahul",
    added:new Date()
  },
  {
    text:"hi dear",
    user:"raghav",
    added:new Date()
  },
  {
    text:"heloo",
    user:"guri",
    added:new Date()
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
