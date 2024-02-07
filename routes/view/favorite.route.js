const router = require('express').Router();
const { Property } = require('../../db/models');

router.get('/', (req, res) => {
  res.status(200).send('Favorite page');
});

module.exports = router;
