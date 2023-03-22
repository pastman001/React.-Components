import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { Form } from './components/Form';
import { MainComponent } from './components/MainComponent';
import { Navigation } from './components/Navigation';
import { UnknownPage } from './components/UnknownPage';
import './style.css';

export class App extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="main__container">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<UnknownPage />} />
        </Routes>
      </div>
    );
  }
}
