const router = require('express').Router();
const fileupload = require('../../utils/fileupload');
const { Property, Img } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const {
      category, title, address, price, description, coordinates,
    } = req.body;
    const file = req.files.url;
    if (category && title && address && price && description && coordinates) {
      if (file.length) {
        const arrUrl = await Promise.all(
          file.map(async (el) => await fileupload(el)),
        );
      } else {
        const img = await fileupload(file);
        const newProperty = await Property.create({
          category_id: category, title, address, price, description, coordinates,
        });
        const newImgs = await Img.create({ url: img, property_id: newProperty.id });
        res.status(201).json({ message: 'confirm' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
