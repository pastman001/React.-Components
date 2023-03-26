import React from 'react';

type PropsInput = {
  linkToInputMan: React.RefObject<HTMLInputElement>;
  linkToInputWoman: React.RefObject<HTMLInputElement>;
};
export class Radio extends React.Component<PropsInput> {
  constructor(props: PropsInput) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <>
        <div>
          Man
          <input
            type="radio"
            name="sex"
            value="man"
            ref={this.props.linkToInputMan}
            defaultChecked
          />
          Woman
          <input type="radio" name="sex" value="woman" ref={this.props.linkToInputWoman} />
        </div>
      </>
    );
  }
}
