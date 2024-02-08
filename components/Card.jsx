const React = require('react');

module.exports = function Card({ property }) {
  return (
    <div className="card">
      <p>isfavorite</p>
      <image src={property.Imgs[0].url} alt="pic" />
      <p>{property.title}</p>
      <p>{property.price}</p>
      <button type="button" id={property.id}>Посмотреть</button>
    </div>
  );
};
