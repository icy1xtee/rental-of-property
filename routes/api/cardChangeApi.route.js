const router = require('express').Router();
const { Property } = require('../../db/models');

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      category, title, address, price, description, coordinates,
    } = req.body;
    if (res.locals.user.isAdmin) {
      const changeProrerty = await Property.update({
        category_id: category, title, address, price, description, coordinates,
      }, { where: { id } });
      res.status(201).json({ message: 'confirm' });
    } else {
      res.status(400).json({ message: 'У вас нет прав для этого действия' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
