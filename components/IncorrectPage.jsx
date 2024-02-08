const React = require('react');
const Layout = require('./Layout');

module.exports = function IncorrectPage() {
  return (
    <Layout>
      <div className="incorrect">
        <img
          alt="..."
          src="https://musor-vyvoz-spb.ru/assets/images/glav2-31.jpg"
        />
        <p>The page you are looking for not avaible!</p>
        <a href="/" className="link_404">Go to Home</a>
      </div>
    </Layout>
  );
};
