const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('Favorite page');
});

module.exports = router;
