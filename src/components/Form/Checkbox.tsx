import React from 'react';

export class Checkbox extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        Are you sure?
        <input type="checkbox" name="YES" />
      </div>
    );
  }
}
