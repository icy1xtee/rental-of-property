const React = require('react');
const Layout = require('./Layout');
const CardList = require('./CardList');

module.exports = function FavoritePage({ title, properties }) {
  return (
    <Layout title={title}>
      <div className="center-container">
        <p className="center-container-title">Избранное</p>
        <div className="cardList__container">
          <CardList properties={properties} />
        </div>
      </div>
    </Layout>
  );
};
