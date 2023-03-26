import React from 'react';
import { arrList } from '../data/arr';
import { Content } from './Content';
import { SearchBar } from './SearchBar';

export class MainComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <SearchBar />
        <Content arrList={arrList} />
      </div>
    );
  }
}
