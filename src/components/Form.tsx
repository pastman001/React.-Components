import React, { FormEvent, useRef, useState } from 'react';
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
}
<
  object,
  {
    imgUrl: Blob | MediaSource | undefined;
    nameTrue: boolean | undefined;
    surnameTrue: boolean | undefined;
    birthdayTrue: boolean | undefined;
    imgUrlTrue: boolean | undefined;
  }
> 
*/
export const Form = (props: object) => {
  const [state, setState] = useState({
    imgUrl: undefined,
    nameTrue: false,
    surnameTrue: false,
    birthdayTrue: false,
    imgUrlTrue: false,
  });

  const nameRef = useRef<HTMLInputElement>();
  const surnameRef = useRef<HTMLInputElement>();
  const birthdayRef = useRef<HTMLInputElement>();
  const selectRef = useRef<HTMLInputElement>();
  const checkboxRef = useRef<HTMLInputElement>();
  const radioManRef = useRef<HTMLInputElement>();
  const radioWomanRef = useRef<HTMLInputElement>();
  const imgRef = useRef<HTMLInputElement>();
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    const nameField = nameRef.current?.value;
    const surnameField = surnameRef.current?.value;
    const birthdayField = birthdayRef.current?.value;
    const selectField = selectRef.current?.value;
    const checkboxField = checkboxRef.current?.checked;
    const manField = radioManRef.current?.value;
    const womanField = radioWomanRef.current?.value;
    const imgField = imgRef.current?.files?.[0];
    arrList.push({
      name: nameField!,
      surname: surnameField!,
      birthday: birthdayField!,
      select: selectField!,
      checkbox: checkboxField!,
      radio: radioManRef.current?.checked ? manField! : womanField!,
      imgFile: imgField!,
    });
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <Name text="Enter you name" inputName="name" />
      {state.nameTrue && <div>You have filled in the field incorrectly</div>}
      <Name text="Enter you surname" inputName="surname" />
      {state.surnameTrue && <div>You have filled in the field incorrectly</div>}
      <Birthday />
      {state.birthdayTrue && <div>You have filled in the field incorrectly</div>}
      <Option />
      <Checkbox />
      <Radio />
      <input type="file" ref={imgRef} />
      {state.imgUrlTrue && <div>You have filled in the field incorrectly</div>}
      <input type="submit" />
    </form>
  );
};
