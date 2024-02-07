const router = require('express').Router();
const authRouter = require('./view/auth.route');
const contentRouter = require('./view/content.route');
const formRouter = require('./view/form.route');

router.use('/', contentRouter);
router.use('/auth', authRouter);
router.use('/form', formRouter);
router.use('/content', contentRouter);

module.exports = router;
