import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header>
      <Link className="link__button" to="/">
        Main
      </Link>
      <Link className="link__button" to="/aboutUs">
        About Us
      </Link>
      <Link className="link__button" to="/form">
        Form
      </Link>
    </header>
  );
};
