import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('SearchBar', () => {
    const { getByText } = render(<SearchBar />);
    const SearchBarText = getByText(/react/i);
    userEvent.type(screen.getByRole('text'), 'React');
    screen.debug();
    // expect(SearchBarText).toBeInTheDocument();
  });
});
