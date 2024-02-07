const React = require("react");
const Layout = require("./Layout");

function MainPage({title, properties}) {
  return (
  <Layout title={title}>
    <div>
        <p>filter</p>
        {categories.map((el)=> <p>{el.name}</p>)}
    </div>
    <div className="PropertyList">
        {properties.map((el)=>(
           < Property key = {el.id} property={el}/>
        ))}
    </div>
  </Layout>;
)}

module.exports = MainPage;
