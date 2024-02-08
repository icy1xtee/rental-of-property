const React = require('react');

module.exports = function Card({ property, user }) {
  return (
    <div className="cardList__containter-card" data-id={property.id}>
      <svg className="card-favicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
      <div className="card-picture-containter">
        <image className="card-picture" src={property.Imgs[0].url} alt="pic" />
      </div>
      <p className="card-title">{property.title}</p>
      <p className="card-price">{property.price}</p>
      <button className="card-button" type="button" id={property.id}>Посмотреть</button>
      {user && user.isAdmin && <button className="admin-button-delete" id={property.id} type="button">Удалить</button>}
    </div>
  );
};
