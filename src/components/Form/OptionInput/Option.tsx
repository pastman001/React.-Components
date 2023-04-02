import React, { ChangeEvent } from 'react';
import { InterfaceBase } from '../Form';
interface InterfaceSelect extends InterfaceBase {
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
        <option value="1">typo 1</option>
        <option value="2">typo 2</option>
        <option value="3">typo 3</option>
        <option value="4">typo 4</option>
        <option value="5">typo 5</option>
      </select>
      {errors.select && <div className="Warning">This field is required</div>}
    </div>
  );
};
