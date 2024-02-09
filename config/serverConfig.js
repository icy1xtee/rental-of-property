const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const ssr = require('../middleware/render');
const { verifyAccessToken } = require('../middleware/verifyToken');
const { checkUser } = require('../middleware/auth');

function serverConfig(app) {
  app.use(fileUpload());
  app.use(cookieParser());
  app.use(verifyAccessToken);
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(ssr);
  app.use(morgan('dev'));
  app.use(checkUser);
}

module.exports = serverConfig;
