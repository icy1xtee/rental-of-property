const React = require('react');
const Layout = require('./Layout');

module.exports = function CardPage({
  title, property, categories, user,
}) {
  return (
    <Layout title={title} user={user}>
      <div className="center-container">
        {user && user.isAdmin
          && (
            <div className="center-container__form">
              <p>Изменить карточку</p>
              <form className="changeProrerty" data-id={property.id}>
                <select className="form__input" name="category">
                  {categories.map((el) => <option value={el.id}>{el.name}</option>)}
                </select>
                <input className="form__input" name="title" placeholder="Title" />
                <input className="form__input" name="address" placeholder="Address" />
                <input className="form__input" name="price" placeholder="Price" />
                <input className="form__input" name="description" placeholder="Description" />
                <input className="form__input" name="coordinates" placeholder="Coordinates" />
                <button className="form__input" type="submit"> Отправить </button>
                <p className="form__result" />
              </form>
            </div>
          )}
        <div className="images__container">
          {property.Imgs.map((img) => (
            <image className="images__container-img" src={img.url} />
          ))}
        </div>
        <div className="maindata__container">
          <div className="information__containter">
            <p className="information__containter-title">{property.title}</p>
            <p className="information__containter-address">{property.address}</p>
            <p className="information__containter-price">{property.price}</p>
          </div>
          <div className="description_container">
            <p className="description_container-desc">{property.description}</p>
            <svg className="description_container-card-favicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
            <div id="yandexmap" style={{ width: '400px', height: '300px' }} />
          </div>
          <div className="map_container">
            <p className="map_container-map">{property.coordinates}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
