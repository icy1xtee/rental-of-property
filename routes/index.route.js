const router = require('express').Router();
const mainRouter = require('./view/main.route');
const authRouter = require('./view/auth.route');
const cardRouter = require('./view/card.route');
const favoriteRouter = require('./view/favorite.route');
const logoutRouter = require('./view/logout.route');
const errRouter = require('./view/incorrect404.route');

const apiAuthRouter = require('./api/authApi.route');

router.use('/', mainRouter);
router.use('/auth', authRouter);
router.use('/card', cardRouter);
router.use('/favorite', favoriteRouter);
router.use('/logout', logoutRouter);

router.use('/api/auth', apiAuthRouter);
router.use('*', errRouter);
module.exports = router;
