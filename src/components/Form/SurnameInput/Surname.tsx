import React, { ChangeEvent } from 'react';
import { InterfaceBase } from '../Form';
interface InterfaceInput extends InterfaceBase {
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
