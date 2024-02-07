const router = require('express').Router();
const CardPage = require('../../components/CardPage');
const Property = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findOne({ where: { id } });
    const html = res.renderComponent(CardPage, {
      title: property.title,
      property,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.status(500).send({ message });
  }
});

module.exports = router;
