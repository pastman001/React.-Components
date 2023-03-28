import React from 'react';

type PropsInput = {
  linkToInputMan: React.RefObject<HTMLInputElement>;
  linkToInputWoman: React.RefObject<HTMLInputElement>;
};

export const Radio = (props: PropsInput) => {
  return (
    <div>
      Man
      <input type="radio" name="sex" value="man" ref={props.linkToInputMan} defaultChecked />
      Woman
      <input type="radio" name="sex" value="woman" ref={props.linkToInputWoman} />
    </div>
  );
};
