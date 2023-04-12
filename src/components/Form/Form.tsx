import React, { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ArrayMain, ArraySubmit } from '../../data/types/type';
import { Birthday } from './BirthdayInput';
import { CardList } from './CardList';
import { Checkbox } from './CheckboxInput';
import { Name } from './NameInput';
import { Option } from './OptionInput';
import { Radio } from './RadioInput';
import { Surname } from './SurnameInput';
import './style.css';

export const Form: React.FC = () => {
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
