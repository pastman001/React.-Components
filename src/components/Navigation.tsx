import React from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <header>
        <Link className="link__button" to="/">
          Main
        </Link>
        <Link className="link__button" to="/aboutUs">
          About Us
        </Link>
      </header>
    );
  }
}
