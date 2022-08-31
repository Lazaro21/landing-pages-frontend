import { screen } from '@testing-library/react';

// // import { renderTheme } from '../../styles/render-theme';
// import Home from '.';

test('renders learn react link', () => {
  // const { debug } = renderTheme(<Home />);
  const headingConteiner = screen.getByRole('heading', {
    name: 'Teste',
  }).parentElement;
  expect(headingConteiner).toHaveStyle({
    background: 'blue',
  });
  expect(headingConteiner).toMatchSnapshot();
  expect(headingConteiner).toHaveStyleRule('background', 'blue');
});
