const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <div className="navbar">
      <a href="/" className="navbar__logo">Neavito</a>
      <div className="navbar__links">
        {user && user.isAdmin && <a className="navbar__link-favorite" href="/addCard">Добавить объект недвижимости</a>}
        {user && <a className="navbar__link-favorite" href="/favorite">Избранное</a>}
        {!user && <a className="navbar__link-login" href="/auth">Войти или зарегистрироваться</a>}
        {user && <a className="navbar__link-logout" href="/logout">Выйти</a>}
      </div>
    </div>
  );
};
