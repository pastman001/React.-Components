import React from 'react';

export const Birthday = (props: any) => {
  const { register, errors } = props;
  return (
    <div>
      <label>
        Enter you name
        <input {...register('birthday', { required: true })} type="date" />
      </label>
      {errors.birthday && <div className="Warning">This field is required</div>}
    </div>
  );
};
