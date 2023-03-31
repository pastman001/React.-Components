import React from 'react';
import { ArrayList } from '../../data/arr';

type PropsType = {
  arrList: ArrayList;
};

export const Content = (props: PropsType) => {
  const mainContent = props.arrList.map((item, index) => {
    if (item.imgUrl !== undefined) {
      return (
        <div className="container" key={index}>
          <img src={item.imgUrl} />
          <div className="container__header">{item.name}</div>
          <div className="container__content">{item.surname}</div>
          <div>{item.birthday}</div>
          <div>{item.select}</div>
          <div>
            {item.checkbox
              ? 'The user agrees to the condition.'
              : 'The user does not agree with the condition.'}
          </div>
          <div>{item.radio}</div>
        </div>
      );
    }
    if (item.imgFile !== undefined) {
      return (
        <div className="container" key={index}>
          <img src={URL.createObjectURL(item.imgFile)} />
          <div className="container__header">{item.name}</div>
          <div className="container__content">{item.surname}</div>
          <div>{item.birthday}</div>
          <div>{item.select}</div>
          <div>
            {item.checkbox
              ? 'The user agrees to the condition.'
              : 'The user does not agree with the condition.'}
          </div>
          <div>{item.radio}</div>
        </div>
      );
    }
  });
  return <div className="grid__container">{mainContent}</div>;
};
