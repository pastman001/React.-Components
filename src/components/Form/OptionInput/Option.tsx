import React, { ChangeEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { ComponentBaseInterface } from '../Form';

interface InterfaceSelect extends ComponentBaseInterface {
  selectChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Option: React.FC<InterfaceSelect> = ({
  register,
  inputValue,
  selectChangeHandler,
  errors,
}) => {
  return (
    <div>
      <select
        {...register('select', { required: true })}
        value={inputValue.select}
        onChange={selectChangeHandler}
      >
        <option>select option</option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
        <option value="4">option 4</option>
        <option value="5">option 5</option>
      </select>
      {errors.select && <div className="Warning">This field is required</div>}
    </div>
  );
};
