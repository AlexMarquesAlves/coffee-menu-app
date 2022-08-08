import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '../../styles/render-theme';

it('should test', () => {
  renderTheme(<Header>Test</Header>);
  expect(screen.getByRole('heading', { name: 'Test' })).toMatchSnapshot();
});
