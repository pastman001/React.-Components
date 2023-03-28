import React from 'react';
import { PropsInput } from '../../data/types/type';

export const Checkbox = (props: PropsInput) => {
  return (
    <div>
      Are you sure?
      <input type="checkbox" ref={props.linkToInput} />
    </div>
  );
};
