import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render a text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá Mundo" />);
    const heading = screen.getByRole('heading');
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render an image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImage="image.jpg" />,
    );
    expect(screen.getByRole('img', { name: 'Olá Mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImage="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
