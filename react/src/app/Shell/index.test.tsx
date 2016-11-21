import { expect } from 'chai';
import { renderComponent } from '../../utils/testHelpers';
import Shell from './index';

describe('<Shell />', () => {

  const component = renderComponent(Shell);

  it('Renders with correct style', () => {
    const s = require('./index.css');
    expect(component.find(s.appContainer)).to.exist;
  });

});
