const router = require('express').Router();
const { Favorite } = require('../../db/models');

router.get('/', async (req, res) => {
  // res.status(200).send('Favorite page');
  const favorite = await Favorite.findAll({ where: { user_id: res.locals.user.id } });
  console.log(favorite);
});

module.exports = router;
