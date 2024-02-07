const React = require("react");
const Card = require('./Card')

module.exports = function CardList({ properties }) {
  return (
    <div className="cardList">
      {properties.map((el) => (
        <Card key={el.id} property={el} />
      ))}
    </div>
  );
};