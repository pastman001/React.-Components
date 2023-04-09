import React from 'react';
import './style.css';

type SearchInputType = { searchArea: string };

type PropsType = {
  searchInput: SearchInputType;
  setSearchInput: React.Dispatch<React.SetStateAction<SearchInputType>>;
  foo: () => void;
};

export const SearchBar: React.FC<PropsType> = ({ searchInput, setSearchInput, foo }) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchInput({ searchArea: event.target.value });
  };

  const clickHandler = () => {
    foo();
  };

  return (
    <div className="search__container">
      <span className="search__head">Search:</span>
      <input
        className="search__input"
        name="searchArea"
        type="text"
        onChange={changeHandler}
        value={searchInput.searchArea}
      />
      <button className="search__button" onClick={clickHandler} type="button">
        click me
      </button>
    </div>
  );
};
