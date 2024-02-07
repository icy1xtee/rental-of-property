const router = require('express').Router();
const cookiesConfig = require('../../config/cookiesConfig');

router.get('/', (req, res) => {
  res.locals.user = null;
  res
    .clearCookie(cookiesConfig.access)
    .clearCookie(cookiesConfig.refresh);
  res.status(300).redirect('/');
});

module.exports = router;
