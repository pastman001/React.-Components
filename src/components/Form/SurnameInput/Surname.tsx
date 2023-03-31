import React from 'react';

export const Surname = (props: any) => {
  const { register, inputValue, changeHandler, errors } = props;
  return (
    <div>
      <label>
        Enter you surname
        <input
          {...register('surname', { required: true })}
          name="surname"
          value={inputValue.surname}
          onChange={changeHandler}
        />
      </label>
      {errors.surname && <div className="Warning">This field is required</div>}
    </div>
  );
};
