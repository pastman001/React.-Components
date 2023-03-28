import React from 'react';
import { arrList } from '../data/arr';
import { Content } from './Content';
import { SearchBar } from './SearchBar';

export const MainComponent = () => {
  return (
    <div>
      <SearchBar />
      <Content arrList={arrList} />
    </div>
  );
};
