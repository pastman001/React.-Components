import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Birthday } from './BirthdayInput/Birthday';
import { Checkbox } from './CheckboxInput/Checkbox';
import { Name } from './NameInput/Name';
import { Option } from './OptionInput/Option';
import { Radio } from './RadioInput/Radio';
import { Surname } from './SurnameInput/Surname';

type Inputs = {
  name: string;
  surname: string;
  birthday: string;
  option: string;
  radio: string;
  checkbox: boolean;
};

export const Form = () => {
  const [inputValue, setInputValue] = useState({ name: '', surname: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setInputValue({ name: '', surname: '' });
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
      <input type="submit" />
    </form>
  );
};
