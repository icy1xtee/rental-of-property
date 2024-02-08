const React = require("react");
const Layout = require("./Layout");
const CardList = require('./CardList')

function MainPage({ title, categories, properties }) {
  return (
    <Layout title={title}>
      <div>
        <p>filter</p>
        {categories.map((el) => (
          <p>{el.name}</p>
        ))}
      </div>
      <div>
        <CardList properties={properties} />
      </div>
    </Layout>
  );
}

module.exports = MainPage;
