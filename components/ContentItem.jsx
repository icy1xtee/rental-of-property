const React = require('react');

module.exports = function ContentItem({ animal }) {
  return (
    <div>
      <p>{animal.name}</p>
      <p>{animal.description}</p>
    </div>
  );
};
