import React, { useEffect, useState } from 'react';
//<object, { searchArea: string }>
export const SearchBar = () => {
  const localStorageSearchArea = localStorage.getItem('searchArea');
  const [state, setState] = useState({
    searchArea: localStorageSearchArea !== null ? localStorageSearchArea : '',
  });
  useEffect(() => {}, []);
  /*componentWillUnmount() {
    localStorage.setItem('searchArea', this.state.searchArea);
  }*/
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
      <button className="search__button" onClick={clickHandler}>
        click me
      </button>
    </div>
  );
};
