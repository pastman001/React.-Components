import React, { FormEvent } from 'react';
import { arrList } from '../data/arr';
import { Birthday } from './Form/Birthday';
import { Checkbox } from './Form/Checkbox';
import { Name } from './Form/Name';
import { Option } from './Form/Option';
import { Radio } from './Form/Radio';
/*if (
  (nameField !== undefined && nameField?.split('').length <= 4) ||
  (nameField !== undefined && nameField?.split('').length >= 15)
) {
  this.setState({ ...this.state, nameTrue: true });
}*/
export class Form extends React.Component<
  object,
  {
    imgUrl: Blob | MediaSource | undefined;
    nameTrue: boolean | undefined;
    surnameTrue: boolean | undefined;
    birthdayTrue: boolean | undefined;
    imgUrlTrue: boolean | undefined;
  }
> {
  constructor(props: object) {
    super(props);
    this.state = {
      imgUrl: undefined,
      nameTrue: false,
      surnameTrue: false,
      birthdayTrue: false,
      imgUrlTrue: false,
    };
  }
  private nameRef = React.createRef<HTMLInputElement>();
  private surnameRef = React.createRef<HTMLInputElement>();
  private birthdayRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLSelectElement>();
  private checkboxRef = React.createRef<HTMLInputElement>();
  private radioManRef = React.createRef<HTMLInputElement>();
  private radioWomanRef = React.createRef<HTMLInputElement>();
  private imgRef = React.createRef<HTMLInputElement>();
  submitHandler = (event: FormEvent<HTMLFormElement>) => {
    const nameField = this.nameRef.current?.value;
    const surnameField = this.surnameRef.current?.value;
    const birthdayField = this.birthdayRef.current?.value;
    const selectField = this.selectRef.current?.value;
    const checkboxField = this.checkboxRef.current?.checked;
    const manField = this.radioManRef.current?.value;
    const womanField = this.radioWomanRef.current?.value;
    const imgField = this.imgRef.current?.files?.[0];
    arrList.push({
      name: nameField!,
      surname: surnameField!,
      birthday: birthdayField!,
      select: selectField!,
      checkbox: checkboxField!,
      radio: this.radioManRef.current?.checked ? manField! : womanField!,
      imgFile: imgField!,
    });
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <Name linkToInput={this.nameRef} text="Enter you name" inputName="name" />
        {this.state.nameTrue && <div>You have filled in the field incorrectly</div>}
        <Name linkToInput={this.surnameRef} text="Enter you surname" inputName="surname" />
        {this.state.surnameTrue && <div>You have filled in the field incorrectly</div>}
        <Birthday linkToInput={this.birthdayRef} />
        {this.state.birthdayTrue && <div>You have filled in the field incorrectly</div>}
        <Option linkToSelect={this.selectRef} />
        <Checkbox linkToInput={this.checkboxRef} />
        <Radio linkToInputMan={this.radioManRef} linkToInputWoman={this.radioWomanRef} />
        <input type="file" ref={this.imgRef} />
        {this.state.imgUrlTrue && <div>You have filled in the field incorrectly</div>}
        <input type="submit" />
      </form>
    );
  }
}
