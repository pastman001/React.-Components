import React, { useEffect, useState } from 'react';
import './style.css';

export function SearchBar() {
  const localStorageSearchArea = localStorage.getItem('searchArea');

  const [state, setState] = useState({
    searchArea: localStorageSearchArea !== null ? localStorageSearchArea : '',
  });

  useEffect(() => {
    localStorage.setItem('searchArea', state.searchArea);
  });

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({ searchArea: event.target.value });
  };

  const clickHandler = () => {
    setState({ searchArea: '' });
  };

  return (
    <div className="search__container">
      <span className="search__head">Search:</span>
      <input
        className="search__input"
        name="searchArea"
        type="text"
        onChange={changeHandler}
        value={state.searchArea}
      />
      <button className="search__button" onClick={clickHandler} type="button">
        click me
      </button>
    </div>
  );
}
