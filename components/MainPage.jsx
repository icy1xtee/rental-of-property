const React = require("react");
const Layout = require("./Layout");

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
        <Cardlist properties={properties} />
      </div>
    </Layout>
  );
}

module.exports = MainPage;
