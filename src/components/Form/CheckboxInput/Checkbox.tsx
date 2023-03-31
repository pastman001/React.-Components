import React from 'react';

export const Checkbox = (props: any) => {
  const { register, errors } = props;
  return (
    <div>
      Are you sure?
      <input type="checkbox" {...register('checkbox', { required: true })} />
      {errors.checkbox && <div className="Warning">This field is required</div>}
    </div>
  );
};
