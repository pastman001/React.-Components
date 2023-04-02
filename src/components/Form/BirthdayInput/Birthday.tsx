import React, { ChangeEvent } from 'react';
import { ComponentBaseInterface } from '../Form';
interface InterfaceInput extends ComponentBaseInterface {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Birthday: React.FC<InterfaceInput> = ({
  register,
  inputValue,
  changeHandler,
  errors,
}) => {
  return (
    <div>
      <label>
        Enter you name
        <input
          {...register('birthday', { required: true })}
          type="date"
          name="birthday"
          value={inputValue.birthday}
          onChange={changeHandler}
        />
      </label>
      {errors.birthday && <div className="Warning">This field is required</div>}
    </div>
  );
};
