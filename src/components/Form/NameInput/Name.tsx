import React, { ChangeEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { ComponentBaseInterface } from '../../../data/types/type';

interface InterfaceInput extends ComponentBaseInterface {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Name: React.FC<InterfaceInput> = ({ register, inputValue, changeHandler, errors }) => {
  return (
    <div>
      <label htmlFor="ok">
        Enter you name
        <input
          id="ok"
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
