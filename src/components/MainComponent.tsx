import React from 'react';
import { Content } from './Content';
import { SearchBar } from './SearchBar';

export class MainComponent extends React.Component {
  constructor(props: object) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <SearchBar />
        <Content />
      </div>
    );
  }
}
