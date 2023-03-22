import React from 'react';

export class Radio extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        <div>
          Man
          <input type="radio" name="sex" value="man" />
        </div>
        <div>
          Woman
          <input type="radio" name="sex" value="woman" />
        </div>{' '}
      </div>
    );
  }
}
