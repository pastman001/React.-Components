import React from 'react';

export const Name = (props: any) => {
  const { register, inputValue, changeHandler, errors } = props;
  return (
    <div>
      <label>
        Enter you name
        <input
          {...register('name', { required: true })}
          name="name"
          value={inputValue.name}
          onChange={changeHandler}
        />
      </label>
      {errors.name && <div className="Warning">This field is required</div>}
    </div>
  );
};
/*

*/
