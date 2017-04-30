var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the about page.</p>
      <div class="callout">
        <h5>Why did i make the React Weather App?</h5>
        <p>It was made while learning the new React framework.</p>
      </div>
    </div>


  )
};

module.exports = About;
