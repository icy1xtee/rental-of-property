const router = require('express').Router();
const addCardPage = require('../../components/AddCardPage');
const { Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    const html = res.renderComponent(addCardPage, {
      title: 'Добавить объект недвижимости',
      categories,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).send({ message });
  }
});

module.exports = router;
