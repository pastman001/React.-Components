import React, { ChangeEvent } from 'react';
import { ComponentBaseInterface } from '../Form';
interface InterfaceInput extends ComponentBaseInterface {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Name: React.FC<InterfaceInput> = ({ register, inputValue, changeHandler, errors }) => {
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
