const router = require('express').Router();
const Layout = require('../../components/Layout');

router.get('/', (req, res) => {
  const html = res.renderComponent(Layout, {

  });
  res.status(201).send(html);
});

module.exports = router;
