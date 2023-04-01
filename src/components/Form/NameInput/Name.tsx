import React, { ChangeEvent } from 'react';
import { A } from '../Form';
interface C extends A {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Name: React.FC<C> = ({ register, inputValue, changeHandler, errors }) => {
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
