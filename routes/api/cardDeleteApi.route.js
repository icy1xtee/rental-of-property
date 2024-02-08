const router = require('express').Router();
const { Property } = require('../../db/models');

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      if (res.locals.user.isAdmin) {
        await Property.destroy({ where: { id } });
        res.json({ message: 'confirm' });
      } else {
        res.json({ message: 'no access' });
      }
    } else {
      res.json({ message: 'no access' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
