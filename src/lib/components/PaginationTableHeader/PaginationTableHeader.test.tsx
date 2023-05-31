import { render, screen } from '@testing-library/react';
// import { describe, it } from 'vitest';

import PaginationTableHeader from './PaginationTableHeader';

describe('App', () => {
  it('Renders main div', () => {
    //Arrange

    render(<PaginationTableHeader />);

    //Act
    //Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World!');
  });
});
