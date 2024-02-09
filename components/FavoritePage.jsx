const React = require('react');
const Layout = require('./Layout');
const CardList = require('./CardList');

module.exports = function FavoritePage({ title, properties, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="center-container">
        <p className="center-container-title">Избранное</p>
        {user && properties.length !== 0 && <CardList properties={properties} user={user} />}
        {(properties.length === 0) ? <p className="cardList__container-nocards">В избранном пока ничего нет</p> : false}
      </div>
    </Layout>
  );
};
