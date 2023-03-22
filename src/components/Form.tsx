import React from 'react';
import { Birthday } from './Form/Birthday';
import { Checkbox } from './Form/Checkbox';
import { Option } from './Form/Option';
import { Radio } from './Form/Radio';

export class Form extends React.Component<
  object,
  { name: string | undefined; surname: string | undefined }
> {
  constructor(props: object) {
    super(props);
    this.state = { name: '', surname: '' };
  }
  private nameRef = React.createRef<HTMLInputElement>();
  private surnameRef = React.createRef<HTMLInputElement>();
  render() {
    return (
      <div>
        <div>
          Enter you name
          <input type="text" name="name" ref={this.nameRef} />
        </div>
        <div>
          Enter you surname
          <input type="text" name="surname" ref={this.surnameRef} />
        </div>
        <Birthday />
        <Option />
        <Checkbox />
        <Radio />
        <input type="file" />
        <button
          onClick={() => {
            this.setState({
              name: this.nameRef.current?.value,
              surname: this.surnameRef.current?.value,
            });
          }}
        >
          click me pls
        </button>
      </div>
    );
  }
}
