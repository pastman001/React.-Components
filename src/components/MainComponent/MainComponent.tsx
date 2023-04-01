import React from 'react';
import { Aaaa } from '../../App';
import { Content } from '../Content/Content';
import { SearchBar } from '../SearchBar/SearchBar';

export const MainComponent: React.FC<Aaaa> = ({ store }) => {
  return (
    <div>
      <SearchBar />
      <Content store={store} />
    </div>
  );
};
