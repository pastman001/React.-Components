/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { CharacterType } from '../../../data/types/type';
import './style.css';

type PropsType = {
  store: CharacterType[];
  pages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Content: React.FC<PropsType> = ({ store, pages, setCurrentPage }) => {
  const clickHandler = (value: number) => {
    setCurrentPage(value);
  };
  const mainContent = store.map((item, index) => {
    return (
      <div className="container" key={index}>
        {item.name !== 'NaN' && <div className="container__header">{item.name}</div>}
        {item.race !== 'NaN' && <div className="container__content">{item.race}</div>}
        {item.gender !== 'NaN' && <div className="container__content">{item.gender}</div>}
        {item.birth !== 'NaN' && <div className="container__content">{item.birth}</div>}
        {item.death !== 'NaN' && <div className="container__content">{item.death}</div>}
        {item.height !== 'NaN' && <div className="container__content">{item.height}</div>}
        {item.hair !== 'NaN' && <div className="container__content">{item.hair}</div>}
        {item.realm !== 'NaN' && <div className="container__content">{item.realm}</div>}
        {item.spouse !== 'NaN' && <div className="container__content">{item.spouse}</div>}
        <a href={item.wikiUrl}>{item.wikiUrl}</a>
      </div>
    );
  });
  const paginationA = [];
  for (let i = 1; i <= pages; i++) {
    paginationA.push(i);
  }
  const pagination = paginationA.map((item, index) => {
    const link = `page=${index + 1}`;
    return (
      <span key={index} className="paginationButton">
        <a href={link}>
          <button
            type="button"
            onClick={() => {
              clickHandler(index + 1);
            }}
          >
            {item}
          </button>
        </a>
      </span>
    );
  });
  return (
    <>
      <div className="grid__container">{mainContent}</div>
      <div className="pagination__wrapper">{pagination}</div>
    </>
  );
};
