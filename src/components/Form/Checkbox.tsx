import React from 'react';
import { PropsInput } from '../../data/types/type';

export class Checkbox extends React.Component<PropsInput> {
  constructor(props: PropsInput) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        Are you sure?
        <input type="checkbox" ref={this.props.linkToInput} />
      </div>
    );
  }
}
