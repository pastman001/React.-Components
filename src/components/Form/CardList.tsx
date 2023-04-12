/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { ArrayMain } from '../../data/types/type';

type Props = {
  cardsList: ArrayMain[];
};

export const CardList: React.FC<Props> = ({ cardsList }) => {
  const mainContent = cardsList.map((item, index) => {
    if (item.imgFile !== undefined) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div className="container" key={index}>
          <img src={URL.createObjectURL(item.imgFile)} alt="text" />
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
