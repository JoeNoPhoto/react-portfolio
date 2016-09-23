import React from 'react';
import { Link } from 'react-router';

const Examples = () =>
  <div>
    <h1 className="text-center page-title"> Examples</h1>
    <p>Here are a few example locations to try out</p>
    <ol>
      <li>
        <Link to="/react-weather/?location=Seattle">Seattle, WA</Link>
      </li>
      <li>
        <Link to="/react-weather/?location=Philadelphia">Philly, PA</Link>
      </li>
      <li>
        <Link to="/react-weather/?location=Rio">Rio, Brazil</Link>
      </li>
    </ol>
  </div>;

export default Examples;
