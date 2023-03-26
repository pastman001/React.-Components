import React from 'react';

type PropsInput = {
  text: string;
  inputName: string;
  linkToInput: React.RefObject<HTMLInputElement>;
};
export class Name extends React.Component<PropsInput> {
  constructor(props: PropsInput) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.props.text}
        <input type="text" name={this.props.inputName} ref={this.props.linkToInput} />
        {false && <div>You have filled in the field incorrectly</div>}
      </div>
    );
  }
}
