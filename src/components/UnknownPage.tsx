import React from 'react';

export class UnknownPage extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return <div className="not__found">404</div>;
  }
}
