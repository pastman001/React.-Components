import React from 'react';
import { arr } from '../data/arr';

export class Main extends React.Component<object, { searchArea: string }> {
  constructor(props: object) {
    super(props);
    this.state = { searchArea: '' };
  }
  componentWillUnmount() {}
  mainContent = arr.map((item, index) => {
    return (
      <div className="container" key={index}>
        <img src={item.imgUrl} />
        <div className="container__header">{item.header}</div>
        <div className="container__content">{item.mainText}</div>
      </div>
    );
  });

  changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ searchArea: event.target.value });
  };
  clickHandler = () => {
    localStorage.setItem('searchArea', this.state.searchArea);
    this.setState({ searchArea: '' });
  };
  render(): React.ReactNode {
    return (
      <div>
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
        <div className="grid__container">{this.mainContent}</div>
      </div>
    );
  }
}
