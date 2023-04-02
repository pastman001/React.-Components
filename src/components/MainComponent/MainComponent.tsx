import React from 'react';
import { StoreOnly } from '../../App';
import { Content } from '../Content/Content';
import { SearchBar } from '../SearchBar/SearchBar';

export const MainComponent: React.FC<StoreOnly> = ({ store }) => {
  return (
    <div>
      <SearchBar />
      <Content store={store} />
    </div>
  );
};
