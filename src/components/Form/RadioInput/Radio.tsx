import React, { ChangeEvent } from 'react';
import { A } from '../Form';
interface C extends A {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Radio: React.FC<C> = ({ register, inputValue, changeHandler, errors }) => {
  return (
    <>
      <div>
        <label>
          Man
          <input
            {...register('radio')}
            type="radio"
            value="man"
            checked={inputValue.radio === 'man' ? true : false}
            onChange={changeHandler}
          />
        </label>
        <label>
          Woman
          <input
            {...register('radio')}
            type="radio"
            value="woman"
            checked={inputValue.radio === 'woman' ? true : false}
            onChange={changeHandler}
          />
        </label>
      </div>
      {errors.radio && <div className="Warning">This field is required</div>}
    </>
  );
};
