const React = require('react');

module.exports = function Navbar() {
  return (
    <div>
      <p>Neavito</p>
      <a href="/favorites">Favorites</a>
      <a href="/login">Login</a>
      <a href="/registration">Registration</a>
    </div>
  );
};
