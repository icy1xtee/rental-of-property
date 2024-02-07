const React = require('react');
const Layout = require('./Layout');

module.exports = function AuthPage({ title }) {
  return (
    <Layout title={title}>
      <div className="center-container__signin">
        <div className="registration">
          <form className="registration__form">
            <input className="registration__form-input" name="name" placeholder="Name" required />
            <input className="registration__form-input" name="email" placeholder="Email" required />
            <input className="registration__form-input" type="password" name="password" placeholder="Password" required />
            <input className="registration__form-input" type="password" name="confirmPassword" placeholder="Confirm Password" required />
            <button className="form__input-button button" type="submit"> Create Account </button>
            <p className="registration_error" />
          </form>
        </div>
        <div className="login">
          <form className="login__form">
            <input className="login__form-input" name="email" placeholder="Email" />
            <input className="login__form-input" type="password" name="password" placeholder="Password" />
            <button className="login__form-button button" type="submit"> Login </button>
            <p className="login_error" />
          </form>
        </div>
      </div>
    </Layout>
  );
};
