const router = require('express').Router();
const mainRouter = require('./view/main.route');
const authRouter = require('./view/auth.route');
const cardRouter = require('./view/card.route');
const favoriteRouter = require('./view/favorite.route');

const apiAuthRouter = require('./api/authApi.route');

router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/card', cardRouter);
router.use('/favorite', favoriteRouter);

router.use('/api/auth', apiAuthRouter);

module.exports = router;
