import { render } from '@testing-library/react';
import { UnknownPage } from './UnknownPage';

describe('UnknownPage', () => {
  it('UnknownPage', () => {
    const { getByText } = render(<UnknownPage />);
    const UnknownPageText = getByText(/Page not found/i);
    expect(UnknownPageText).toBeInTheDocument();
  });
});
