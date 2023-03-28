import React from 'react';
import { PropsInput } from '../../data/types/type';

export const Birthday = (props: PropsInput) => {
  return (
    <div>
      Enter you birthday
      <input type="date" name="birthday" ref={props.linkToInput} />
    </div>
  );
};
