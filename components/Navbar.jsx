const React = require('react');

module.exports = function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar__logo">Neavito</p>
      <div className="navbar__links">
        <a className="navbar__link-favorite" href="/favorite">Избранное</a>
        <a className="navbar__link-login" href="/login">Войти</a>
        <a className="navbar__link-registration" href="/registration">Создать аккаунт</a>
      </div>
    </div>
  );
};
