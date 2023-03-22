import React from 'react';

export class Option extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        <select>
          <option>typo 1</option>
          <option>typo 2</option>
          <option>typo 3</option>
          <option>typo 4</option>
          <option>typo 5</option>
        </select>
      </div>
    );
  }
}
