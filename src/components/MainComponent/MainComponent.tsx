import { StoreOnly } from 'App';
import React from 'react';
import { Content, SearchBar } from './';

export const MainComponent: React.FC<StoreOnly> = ({ store }) => {
  return (
    <div>
      <SearchBar />
      <Content store={store} />
    </div>
  );
};
