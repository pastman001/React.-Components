import React from 'react';
import { PropsInput } from '../../data/types/type';

export class Birthday extends React.Component<PropsInput> {
  constructor(props: PropsInput) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        Enter you birthday
        <input type="date" name="birthday" ref={this.props.linkToInput} />
      </div>
    );
  }
}
