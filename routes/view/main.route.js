const router = require('express').Router();
const { Property, Category, Img } = require('../../db/models');
const MainPage = require('../../components/MainPage');

router.get('/', async (req, res) => {
  try {
    const properties = await Property.findAll({ include: [{ model: Img, attributes: ['url'] }] });
    const categories = await Category.findAll();
    const html = res.renderComponent(MainPage, {
      categories,
      properties,
      title: 'CardList',
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
