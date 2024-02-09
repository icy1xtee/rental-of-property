const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { createCookie } = require('../../middleware/createCookie');

router.post('/registration', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name && email && password) {
      const customerDB = await User.findOne({ where: { email } });
      if (customerDB) {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hash });
        createCookie(user)(req, res, () => {
          res.status(201).json({ message: 'ok' });
        });
      }
    } else {
      res.status(400).json({ message: 'Заполните все необходимые поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user) {
        const isSame = await bcrypt.compare(req.body.password, user.password);
        // console.log(isSame);
        if (isSame) {
          createCookie(user)(req, res, () => {
            res.status(201).json({ message: 'ok' });
          });
        } else {
          res.status(400).json({ message: 'Неверный пароль или пользователь не существует' });
        }
      } else {
        res.status(400).json({ message: 'Неверный пароль или пользователь не существует' });
      }
    } else {
      res.status(400).json({ message: 'Необходимо заполнить все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
