import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('App', () => {
  it('App', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
  });
});
