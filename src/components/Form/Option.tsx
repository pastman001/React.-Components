import React from 'react';
import { PropsOption } from '../../data/types/type';
export class Option extends React.Component<PropsOption> {
  constructor(props: PropsOption) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        <select ref={this.props.linkToSelect}>
          <option value="1">typo 1</option>
          <option value="2">typo 2</option>
          <option value="3">typo 3</option>
          <option value="4">typo 4</option>
          <option value="5">typo 5</option>
        </select>
      </div>
    );
  }
}
