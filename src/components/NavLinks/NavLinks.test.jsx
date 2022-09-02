import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock}>Children</NavLinks>);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks>Children</NavLinks>);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  // it('should render with flex-column when on mobile', () => {
  //   renderTheme(<NavLinks links={mock}>Children</NavLinks>);
  //   expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
  //     'flex-flow',
  //     'column wrap',
  //     {
  //       media: '(max-width:768px)',
  //     },
  //   );
  // });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <NavLinks links={mock}>Children</NavLinks>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
