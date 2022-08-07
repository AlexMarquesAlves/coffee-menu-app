import { screen } from '@testing-library/react';
import { Example } from '.';
import { renderTheme } from '../../styles/render-theme';

it('should test', () => {
  renderTheme(<Example>Test</Example>);
  expect(screen.getByRole('heading', { name: 'Test' })).toMatchSnapshot();
});
