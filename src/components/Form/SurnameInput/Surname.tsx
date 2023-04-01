import React, { ChangeEvent } from 'react';
import { A } from '../Form';
interface C extends A {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Surname: React.FC<C> = ({ register, inputValue, changeHandler, errors }) => {
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
