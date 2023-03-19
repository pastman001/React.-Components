import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { Main } from './components/Main';
import { UnknowPage } from './components/UnknowPage';
import './style.css';

export class App extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="main__container">
        <header>
          <Link className="link__button" to="/">
            Main
          </Link>
          <Link className="link__button" to="/aboutUs">
            About Us
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<UnknowPage />} />
        </Routes>
      </div>
    );
  }
}
