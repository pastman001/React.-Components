import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Form, MainComponent, Navigation, UnknownPage } from '.';
import type { CharacterType } from './data/types/type';
import './style.css';

export type StoreType = {
  store: CharacterType[];
  setStore: React.Dispatch<React.SetStateAction<CharacterType[]>>;
};

export const App = () => {
  const [store, setStore] = useState<CharacterType[]>([]);
  return (
    <div className="main__container">
      <Navigation />
      <Routes>
        <Route path="/:pageNumber?" element={<MainComponent store={store} setStore={setStore} />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </div>
  );
};
