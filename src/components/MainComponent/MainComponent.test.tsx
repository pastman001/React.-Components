import { render } from '@testing-library/react';
import { MainComponent } from './MainComponent';

describe('MainComponent', () => {
  it('MainComponent', () => {
    render(<MainComponent store={[]} />);
  });
});
