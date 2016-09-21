'use strict';
import imagesGridModule, { imagesGridComponent } from './index.js';
// if a mock json object is needed for tests
// import imagesGridMock from '../../../tests/mocks/imagesGrid.mock.json';

describe('imagesGrid Component', () => {
  let ctrl;

  beforeEach(window.module(imagesGridModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(imagesGridComponent.selector, {
      $state: {}
    });
  }));

  it('should have a title', () => {
    const expected = 'SuperNova';
    const actual = ctrl.title;
    expect(actual).toMatch(expected);
  });
});
