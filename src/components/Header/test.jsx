import { screen } from '@testing-library/react';
import { Section } from '.';
import { renderTheme } from '../../styles/render-theme';

it('should test', () => {
  renderTheme(<Section>Test</Section>);
  expect(screen.getByRole('heading', { name: 'Test' })).toMatchSnapshot();
});
