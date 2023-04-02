import React, { ChangeEvent } from 'react';
import { InterfaceBase } from '../Form';
interface InterfaceCheckbox extends InterfaceBase {
  checkboxChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox: React.FC<InterfaceCheckbox> = ({
  register,
  inputValue,
  checkboxChangeHandler,
  errors,
}) => {
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
