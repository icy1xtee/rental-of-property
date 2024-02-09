const React = require('react');
const Layout = require('./Layout');

module.exports = function AddCardPage({
  title, categories, user,
}) {
  return (
    <Layout title={title} user={user}>
      <div className="center-container">
        <p className="center-container-title">Добавить карточку</p>
        {user && user.isAdmin
          && (
            <div className="center-container__form">
              <form className="addProrerty">
                <select className="formadd__input" name="category">
                  {categories.map((el) => <option value={el.id}>{el.name}</option>)}
                </select>
                <input className="formadd__input" name="title" placeholder="Title" />
                <input className="formadd__input" name="address" placeholder="Address" />
                <input className="formadd__input" name="price" placeholder="Price" />
                <input className="formadd__input" name="description" placeholder="Description" />
                <input className="formadd__input" name="coordinates" placeholder="Coordinates" />
                <input name="img" placeholder="img" type="file" multiple />
                <button className="formadd__input" type="submit"> Отправить </button>
                <p className="formadd__result" />
              </form>
            </div>
          )}
      </div>
    </Layout>
  );
};
