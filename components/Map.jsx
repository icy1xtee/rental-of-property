const React = require('react');
const Layout = require('./Layout');

module.exports = function CardPage({ title }) {
  return (
    <Layout title={title}>
      <div id="yandexmap" style={{ width: '300px', height: '200px' }} />
    </Layout>
  );
};
