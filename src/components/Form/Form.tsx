import React, { ChangeEvent, FC, useState } from 'react';
import { FieldErrors, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { Aaa } from '../../App';
import { Arr, ArrSubmit } from '../../data/arr';
import { Birthday, Checkbox, Name, Option, Radio, Surname } from './index';
import './style.css';

export interface A {
  inputValue: Arr;
  register: UseFormRegister<ArrSubmit>;
  errors: FieldErrors<ArrSubmit>;
}
export const Form: FC<Aaa> = ({ store, setStore }) => {
  const [inputValue, setInputValue] = useState<Arr>({
    name: '',
    surname: '',
    birthday: '',
    select: '',
    radio: '',
    checkbox: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArrSubmit>();

  const onSubmit: SubmitHandler<ArrSubmit> = ({ imgFile, ...data }) => {
    setInputValue({ name: '', surname: '', birthday: '', select: '', radio: '', checkbox: false });
    const imgData = { ...data, imgFile: imgFile?.[0] };
    setStore([...store, imgData]);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [event.currentTarget.name]: event.currentTarget.value });
  };

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setInputValue({ ...inputValue, [event.currentTarget.name]: event.currentTarget.value });
  };

  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.currentTarget.name]: event.currentTarget.checked,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Name
        inputValue={inputValue}
        changeHandler={changeHandler}
        register={register}
        errors={errors}
      />
      <Surname
        inputValue={inputValue}
        changeHandler={changeHandler}
        register={register}
        errors={errors}
      />
      <Birthday
        inputValue={inputValue}
        changeHandler={changeHandler}
        register={register}
        errors={errors}
      />
      <Option
        inputValue={inputValue}
        selectChangeHandler={selectChangeHandler}
        register={register}
        errors={errors}
      />
      <Radio
        inputValue={inputValue}
        changeHandler={changeHandler}
        register={register}
        errors={errors}
      />
      <Checkbox
        inputValue={inputValue}
        checkboxChangeHandler={checkboxChangeHandler}
        register={register}
        errors={errors}
      />
      <input type="file" {...register('imgFile', { required: true })} />
      <input type="submit" />
    </form>
  );
};
