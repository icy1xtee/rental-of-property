const React = require('react');
const Card = require('./Card');

module.exports = function CardList({ properties, user }) {
  return (
    <div className="cardList__containter">
      {properties.map((el) => (
        <Card key={el.id} property={el} user={user} />
      ))}
    </div>
  );
};
