const React = require('react');
const Layout = require('./Layout');

module.exports = function CardPage({ title, property }) {
  return (
    <Layout title={title}>
      <div className="images">
        {property.Imgs.map((img) => <image className="images" src={img.url} />)}
      </div>
      <div className="information">
        <p>{property.title}</p>
        <p>{property.address}</p>
        <p>{property.price}</p>
      </div>
      <div className="description">
        <p>{property.description}</p>
      </div>
      <div className="map">
        <p>{property.coordinates}</p>
      </div>
    </Layout>
  );
};
