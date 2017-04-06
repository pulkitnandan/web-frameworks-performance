var router = require('express').Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  const fs = require('fs')
fs.readFile('index', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

    res.send(data)
});
})

module.exports = router
