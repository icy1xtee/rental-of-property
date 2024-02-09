const router = require('express').Router();
const FavoritePage = require('../../components/FavoritePage');
const { Favorite, Property, Img } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const favorite = await Favorite.findAll({
      where: { user_id: res.locals.user.id },
    });
    const props = favorite.map(
      async (el) => await Property.findOne({ where: { id: el.property_id }, include: [{ model: Img, attributes: ['url'] }] }),
    );
    const properties = await Promise.all(props);
    const html = res.renderComponent(FavoritePage, {
      title: 'favorite page',
      properties,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
