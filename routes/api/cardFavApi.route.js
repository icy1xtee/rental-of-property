const router = require('express').Router();
const { Favorite } = require('../../db/models');

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user_id = res.locals.user.id;
    const isFavExist = await Favorite.findOne({ where: { user_id, property_id: id } });
    if (isFavExist) {
      await Favorite.destroy({ where: { user_id, property_id: id } });
      res.status(400).json({ message: 'deleted' });
    } else {
      const favorites = await Favorite.create({ user_id, property_id: id });
      res.status(201).json({ message: 'confirm' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
