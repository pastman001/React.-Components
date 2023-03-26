import React from 'react';
import { ArrayList } from '../data/arr';

type PropsType = {
  arrList: ArrayList;
};
export class Content extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  mainContent = this.props.arrList.map((item, index) => {
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
  render(): React.ReactNode {
    return <div className="grid__container">{this.mainContent}</div>;
  }
}
