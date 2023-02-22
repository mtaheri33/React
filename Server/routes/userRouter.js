const express = require('express');
const router = express.Router();
const add = require('../mongoose');

router.post('/', (req, res) => {
  add(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.send('failure');
    });
});

module.exports = router;