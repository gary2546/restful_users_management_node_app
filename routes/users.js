var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

// Get userlist
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({}, {}, function(e, docs) {
    res.json(docs);
  });
});

// POIST ti adduser
router.post('/adduser', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.insert(req.body, function(err, results) {
    res.send((err === null) ? {msg: ''} : {msg: err});
  });
});

router.delete('/deleteuser/:id', function(req, res) {
  req.db.get('userlist').remove({'_id': req.params.id }, function(err) {
    res.send((err === null) ? {msg: ''} : {msg: 'error ' + err});
  });
});

module.exports = router;
