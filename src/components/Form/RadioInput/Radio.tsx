import React from 'react';

export const Radio = (props: any) => {
  const { register } = props;
  return (
    <div>
      <label>
        Man
        <input {...register('radio')} type="radio" value="man" />
      </label>
      <label>
        Woman
        <input {...register('radio')} type="radio" value="woman" />
      </label>
    </div>
  );
};
