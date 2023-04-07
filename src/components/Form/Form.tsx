import React, { ChangeEvent, useState } from 'react';
import { FieldErrors, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import { Birthday, Checkbox, Name, Option, Radio, Surname } from '.';
import { StoreState } from '../../App';
import { ArrayMain, ArraySubmit } from '../../data/types/type';
import { CardList } from './CardList';
import './style.css';

export interface ComponentBaseInterface {
  inputValue: ArrayMain;
  register: UseFormRegister<ArraySubmit>;
  errors: FieldErrors<ArraySubmit>;
}

export const Form: React.FC<StoreState> = ({ store, setStore }) => {
  const [inputValue, setInputValue] = useState<ArrayMain>({
    name: '',
    surname: '',
    birthday: '',
    select: '',
    radio: '',
    checkbox: false,
  });

  const [cardsList, setCardsLits] = useState<ArrayMain[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArraySubmit>();

  const onSubmit: SubmitHandler<ArraySubmit> = ({ imgFile, ...data }) => {
    setInputValue({
      name: '',
      surname: '',
      birthday: '',
      select: '',
      radio: '',
      checkbox: false,
    });
    const imgData = { ...data, imgFile: imgFile?.[0] };
    setStore([...store, imgData]);
    setCardsLits([...cardsList, imgData]);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setInputValue({
      ...inputValue,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.currentTarget.name]: event.currentTarget.checked,
    });
  };

  return (
    <>
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
      <CardList cardsList={cardsList} />
    </>
  );
};
