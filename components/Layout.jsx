const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/css/style-reset.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/navbar.css" />
        <link rel="stylesheet" href="/css/main_page.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="/scripts/auth.js" />
        <title>{title}</title>
      </head>
      <body>
        <header className="header">
          <Navbar />
        </header>
        {children}
        <footer className="footer">
          <p className="footer__address">Адрес офиса: Санкт-Петербург, Лиговский пр., 140</p>
          <p className="footer__email">E-mail: helloworld@elbrus-bootcamp.com</p>
        </footer>
      </body>
    </html>
  );
};
