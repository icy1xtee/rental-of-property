const React = require('react');

module.exports = function Card({ property, user }) {
  return (
    <div className="cardList__containter-card" data-id={property.id}>
      <p className="card-favicon">isfavorite</p>
      <image className="card-picture" src={property.Imgs[0].url} alt="pic" />
      <p className="card-title">{property.title}</p>
      <p className="card-price">{property.price}</p>
      <button className="card-button" type="button" id={property.id}>Посмотреть</button>
      {user && user.isAdmin && <button className="admin-button-delete" id={property.id} type="button">Удалить</button>}
    </div>
  );
};
