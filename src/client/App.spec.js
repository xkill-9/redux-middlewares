import { renderComponent, expect } from '../utils/TestHelpers';
import App from './App';
import { describe, it } from 'mocha';

describe('App', () => {
  it('shows the correct text', () => {
    const component = renderComponent(App);

    expect(component).to.contain('Hello World!');
  });
});

