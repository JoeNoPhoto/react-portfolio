import React from 'react';

const About = () =>
  <div>
    <h1 className="text-center page-title">About</h1>
    <p>This is a simple Weather App I created to help develop my app-writing skills.</p>
    <p>Here are some of the tools I used:</p>
    <ul>
      <li><a href="https://facebook.github.io/react">React</a> - The framework I used to build the app.</li>
      <li><a href="https://openweathermap.org">Open Weather Map</a> - I'm using this API to get the Weather map information.</li>
      <li><a href="https://foundation.zurb.com/">Foundation</a> - Used for styling.</li>
      <li><a href="https://github.com/JoeNoPhoto/ReactWeather">Github Repository for the project.</a> - Check out the code here.</li>
      <li><a href="https://www.heroku.com/platform">Heroku</a> - Used to deploy a standalone version of the app online.</li>
    </ul>
  </div>;

export default About;
