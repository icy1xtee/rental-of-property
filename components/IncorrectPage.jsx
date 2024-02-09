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
        <a href="/" className="link_404">Go to Home</a>
      </div>
    </Layout>
  );
};
