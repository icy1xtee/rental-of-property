const React = require('react');

module.exports = function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="navbar__logo">Neavito</a>
      <div className="navbar__links">
        <a className="navbar__link-favorite" href="/favorite">Избранное</a>
        <a className="navbar__link-login" href="/auth">Войти</a>
        <a className="navbar__link-registration" href="/auth">Создать аккаунт</a>
      </div>
    </div>
  );
};
