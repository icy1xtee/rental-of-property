const React = require('react');
const Layout = require('./Layout');

module.exports = function ContentPage({ title, animals }) {
  return (
    <Layout title={title}>
      <div>
        {animals.map((el) => <ContentItem animal={el} />)}
      </div>
    </Layout>
  );
};
