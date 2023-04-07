import React from 'react';
import { StoreOnly } from '../../data/types/type';
// eslint-disable-next-line import/no-cycle
import { Content, SearchBar } from './index';

export const MainComponent: React.FC<StoreOnly> = ({ store }) => {
  return (
    <div>
      <SearchBar />
      <Content store={store} />
    </div>
  );
};
