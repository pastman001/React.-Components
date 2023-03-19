import React from 'react';

export class SearchBar extends React.Component<object, { searchArea: string }> {
  constructor(props: object) {
    super(props);
    this.state = { searchArea: '' };
  }
  changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ searchArea: event.target.value });
  };

  clickHandler = () => {
    localStorage.setItem('searchArea', this.state.searchArea);
    this.setState({ searchArea: '' });
  };
  render(): React.ReactNode {
    return (
      <div className="search__container">
        <span className="search__head">Search:</span>
        <input
          className="search__input"
          name="searchArea"
          type="text"
          onChange={this.changeHandler}
          value={this.state.searchArea}
        />
        <button className="search__button" onClick={this.clickHandler}>
          click me
        </button>
      </div>
    );
  }
}
