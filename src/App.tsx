import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Form, MainComponent, Navigation, UnknownPage, storeArray } from '.';
import type { ArrayMain } from './data/types/type';
import './style.css';

export type StoreState = {
  store: Array<ArrayMain>;
  setStore: React.Dispatch<React.SetStateAction<ArrayMain[]>>;
};

export function App() {
  const [store, setStore] = useState(storeArray);
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
}
