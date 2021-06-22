// __tests__/fetch.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from './footer';

test('loads and displays footer', async () => {
  render(<Footer />);

  expect(screen.getByAltText('LinkedIn'));
  expect(screen.getByAltText('GitHub'));
  expect(screen.getByAltText('GraphQL API'));
});
