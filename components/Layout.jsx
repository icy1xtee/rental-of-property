const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style-reset.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/navbar.css" />
        <link rel="stylesheet" href="/css/main_page.css" />
        {/* <link rel="stylesheet" href="/scripts/yandexMaps.js" /> */}

        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/filter.js" />
        <script
          src="https://api-maps.yandex.ru/v3/?apikey=f3679d9e-098f-4c11-94a9-eb2bade55d95&lang=ru_RU" // скрипт яндекс карт
        />
        <script defer src="/scripts/yandexMaps.js" />
        <title>{title}</title>
      </head>
      <body>
        <header className="header">
          <Navbar />
        </header>
        {children}
        <footer className="footer">
          <p className="footer__address">
            Адрес офиса: Санкт-Петербург, Лиговский пр., 140
          </p>
          <p className="footer__email">
            E-mail: helloworld@elbrus-bootcamp.com
          </p>
        </footer>
      </body>
    </html>
  );
};
