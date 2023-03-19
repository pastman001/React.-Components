import React from 'react';
import { arr } from '../data/arr';

export class Content extends React.Component {
  constructor(props: object) {
    super(props);
  }
  mainContent = arr.map((item, index) => {
    return (
      <div className="container" key={index}>
        <img src={item.imgUrl} />
        <div className="container__header">{item.header}</div>
        <div className="container__content">{item.mainText}</div>
      </div>
    );
  });
  render(): React.ReactNode {
    return <div className="grid__container">{this.mainContent}</div>;
  }
}
