const React = require('react');
const Layout = require('./Layout');
const CardList = require('./CardList');

module.exports = function FavoritePage({ title }) {
  return (
    <Layout title={title}>
      <div>Избранное</div>
      <div>
        <CardList />
      </div>
    </Layout>
  );
};
