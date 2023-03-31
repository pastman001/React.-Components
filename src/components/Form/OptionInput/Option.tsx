import React from 'react';

export const Option = (props: any) => {
  const { register, errors } = props;
  return (
    <div>
      <select {...register('option', { required: true })}>
        <option>select option</option>
        <option value="1">typo 1</option>
        <option value="2">typo 2</option>
        <option value="3">typo 3</option>
        <option value="4">typo 4</option>
        <option value="5">typo 5</option>
      </select>
      {errors.option && <div className="Warning">This field is required</div>}
    </div>
  );
};
