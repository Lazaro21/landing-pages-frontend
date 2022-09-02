import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Teste</Heading>);

    const heading = screen.getByRole('heading', { name: 'Teste' });
    // console.log(heading);
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Teste</Heading>);

    const heading = screen.getByRole('heading', { name: 'Teste' });
    // console.log(heading);
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Teste</Heading>);

    const heading = screen.getByRole('heading', { name: 'Teste' });
    // console.log(heading);
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render a H6', () => {
    renderTheme(<Heading uppercase>Teste</Heading>);

    const heading = screen.getByRole('heading', { name: 'Teste' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Teste</Heading>);
    // const heading = screen.getByRole('heading', { name: 'Teste' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
