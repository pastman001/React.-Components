import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Form } from './components/Form/Form';
import { MainComponent } from './components/MainComponent/MainComponent';
import { Navigation } from './components/Navigation/Navigation';
import { UnknownPage } from './components/UnknownPage/UnknownPage';
import './style.css';

export class App extends React.Component {
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
