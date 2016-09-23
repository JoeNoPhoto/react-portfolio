import React from 'react';
import NavLink from 'NavLink';

const PhotoNav = () => (
  <div className="top-bar">JoeNoPhoto
    <ul className="menu">
      <li>
        <NavLink
          to="/joeno"
          activeClassName="active"
          activeStyle={{ fontWeight: 'bold' }}
        >
          JoeNoPhoto
        </NavLink>
      </li>
    </ul>
  </div>
);

export default PhotoNav;
