import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { arrList, Birthday, Checkbox, Name, Option, Radio, Surname } from './index';
import './style.css';

type Inputs = {
  name: string;
  surname: string;
  birthday: string;
  select: string;
  radio: string;
  checkbox: boolean;
  imgFile: any;
};

export const Form = () => {
  const [inputValue, setInputValue] = useState({ name: '', surname: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setInputValue({ name: '', surname: '' });
    arrList.push({ ...data, imgFile: data.imgFile[0] });
  };

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.currentTarget.name]: e.currentTarget.value });
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
      <Birthday register={register} errors={errors} />
      <Option register={register} errors={errors} />
      <Radio register={register} />
      <Checkbox register={register} errors={errors} />
      <input type="file" {...register('imgFile', { required: true })} />
      <input type="submit" />
    </form>
  );
};
