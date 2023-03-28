import React from 'react';

type PropsInput = {
  text: string;
  inputName: string;
  linkToInput: React.RefObject<HTMLInputElement>;
};

export const Name = (props: PropsInput) => {
  return (
    <div>
      {props.text}
      <input type="text" name={props.inputName} ref={props.linkToInput} />
      {false && <div>You have filled in the field incorrectly</div>}
    </div>
  );
};
