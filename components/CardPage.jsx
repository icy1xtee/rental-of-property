const React = require('react');
const Layout = require('./Layout');

module.exports = function CardPage({ title, property }) {
  return (
    <Layout title={title}>
      <div className="center-container">
        <div className="images__container">
          {property.Imgs.map((img) => (
            <image className="images__container-img" src={img.url} />
          ))}
        </div>
        <div className="information__containter">
          <p className="information__containter-title">{property.title}</p>
          <p className="information__containter-address">{property.address}</p>
          <p className="information__containter-price">{property.price}</p>
        </div>
        <div className="description_container">
          <p className="description_container-desc">{property.description}</p>
          <p className="card-favicon">isfavorite</p>
          <div id="yandexmap" style={{ width: '400px', height: '300px' }} />
        </div>
        <div className="map_container">
          <p className="map_container-map">{property.coordinates}</p>
        </div>
      </div>
    </Layout>
  );
};
