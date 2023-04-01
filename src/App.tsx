import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Form, MainComponent, Navigation, UnknownPage } from './index';
import './style.css';

export const App = () => {
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
};
