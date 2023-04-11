import React, { ChangeEvent } from 'react';
// eslint-disable-next-line import/no-cycle
import { ComponentBaseInterface } from '../../../data/types/type';

interface InterfaceInput extends ComponentBaseInterface {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Radio: React.FC<InterfaceInput> = ({
  register,
  inputValue,
  changeHandler,
  errors,
}) => {
  return (
    <>
      <div>
        <label htmlFor="1">
          Man
          <input
            id="1"
            {...register('radio')}
            type="radio"
            value="man"
            checked={inputValue.radio === 'man'}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="2">
          Woman
          <input
            id="2"
            {...register('radio')}
            type="radio"
            value="woman"
            checked={inputValue.radio === 'woman'}
            onChange={changeHandler}
          />
        </label>
      </div>
      {errors.radio && <div className="Warning">This field is required</div>}
    </>
  );
};
