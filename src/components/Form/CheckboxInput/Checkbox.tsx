import React, { ChangeEvent } from 'react';
import { A } from '../Form';
interface E extends A {
  checkboxChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox: React.FC<E> = ({ register, inputValue, checkboxChangeHandler, errors }) => {
  return (
    <div>
      Are you sure?
      <input
        type="checkbox"
        {...register('checkbox', { required: true })}
        checked={inputValue.checkbox}
        onChange={checkboxChangeHandler}
      />
      {errors.checkbox && <div className="Warning">This field is required</div>}
    </div>
  );
};
