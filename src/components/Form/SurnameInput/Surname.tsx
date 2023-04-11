import React, { ChangeEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { ComponentBaseInterface } from '../../../data/types/type';

interface InterfaceInput extends ComponentBaseInterface {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Surname: React.FC<InterfaceInput> = ({
  register,
  inputValue,
  changeHandler,
  errors,
}) => {
  return (
    <div>
      <label htmlFor="1">
        Enter you surname
        <input
          id="1"
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
