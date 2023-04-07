import { render } from '@testing-library/react';
import { describe } from 'vitest';
import { AboutUs } from './AboutUs';

describe('About Us', () => {
  it('About us', () => {
    const { getByText } = render(<AboutUs />);
    const AboutUsText = getByText(/About us/i);
    expect(AboutUsText).toBeInTheDocument();
  });
});
