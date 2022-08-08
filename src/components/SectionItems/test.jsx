import { screen } from '@testing-library/react';
import { SectionItems } from '.';
import { renderTheme } from '../../styles/render-theme';

it('should test', () => {
  renderTheme(<SectionItems>Test</SectionItems>);
  expect(screen.getByRole('heading', { name: 'Test' })).toMatchSnapshot();
});
