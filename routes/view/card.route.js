const router = require('express').Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  
  res.status(200).send('Card page');
});

module.exports = router;
