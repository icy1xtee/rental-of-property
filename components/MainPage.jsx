const React = require('react');
const Layout = require('./Layout');
const CardList = require('./CardList');

function MainPage({ title, categories, properties }) {
  return (
    <Layout title={title}>
      <div>
        <p>filter</p>
        <form>
          {categories.map((el, index) => (
            <div>
              <input type="radio" id={el.id} name="category" value={el.name} />
              <label>{el.name}</label>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <CardList properties={properties} />
      </div>
    </Layout>
  );
}

module.exports = MainPage;
