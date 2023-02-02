import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Main } from './main';

describe('Given Main component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Main('slot');
    expect(element).toBeInstanceOf(Main);
    const h2 = screen.getByRole('heading');
    expect(h2).toBeInTheDocument();
  });
});
