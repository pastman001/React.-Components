import React from 'react';

export class Birthday extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        Enter you birthday
        <input type="date" name="birthday" />
      </div>
    );
  }
}
