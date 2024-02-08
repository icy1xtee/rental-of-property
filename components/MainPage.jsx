const React = require('react');
const Layout = require('./Layout');
const CardList = require('./CardList');

function MainPage({ title, categories, properties }) {
  return (
    <Layout title={title}>
      <div className="center-container">
        <div className="filter__containter">
          <p className="filter__container_name">Фильтр</p>
          <form className="filter__container_form">
            {categories.map((el) => (
              <div className="filter__container_form_element">
                <input className="form_element-input" type="radio" id={el.id} name="category" value={el.name} />
                <label className="form_element-label">{el.name}</label>
              </div>
            ))}
            <button className="filter__container_form-button" type="submit">Submit</button>
          </form>
        </div>
        <CardList properties={properties} />
      </div>
    </Layout>
  );
}

module.exports = MainPage;
