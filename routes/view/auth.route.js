const router = require('express').Router();
const AuthPage = require('../../components/AuthPage');

router.get('/', (req, res) => {
  try {
    const html = res.renderComponent(AuthPage, {
      title: 'Sign in',
    });
    res.status(200).send(html);
  } catch ({ message }) {
    // console.log(message);
    res.status(500).send('Server side problem, please try again later');
  }
});

module.exports = router;
