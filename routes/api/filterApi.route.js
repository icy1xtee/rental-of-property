const router = require('express').Router();
const CardList = require('../../components/CardList');
const { Property, Img } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const properties = await Property.findAll({
      where: { category_id: id },
      include: [{ model: Img, attributes: ['url'] }],
    });
    const html = res.renderComponent(CardList, { properties });
    console.log(html);
    res.json(html);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
