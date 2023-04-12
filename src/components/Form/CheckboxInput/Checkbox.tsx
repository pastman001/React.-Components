import React, { ChangeEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { ComponentBaseInterface } from '../../../data/types/type';

interface InterfaceCheckbox extends ComponentBaseInterface {
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
