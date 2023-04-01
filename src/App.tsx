import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Arr, ArrayList } from './data/arr';
import { AboutUs, Form, MainComponent, Navigation, UnknownPage, arrList } from './index';
import './style.css';

export type Aaa = {
  store: Array<Arr>;
  setStore: React.Dispatch<React.SetStateAction<ArrayList>>;
};
export type Aaaa = { store: Array<Arr> };

export const App = () => {
  const [store, setStore] = useState(arrList);
  return (
    <div className="main__container">
      <Navigation />
      <Routes>
        <Route path="/" element={<MainComponent store={store} />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/form" element={<Form store={store} setStore={setStore} />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </div>
  );
};
