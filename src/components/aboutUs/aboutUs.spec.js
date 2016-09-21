'use strict';
import aboutUsModule, { aboutUsComponent } from './index.js';
// if a mock json object is needed for tests
// import aboutUsMock from '../../../tests/mocks/aboutUs.mock.json';

describe('aboutUs Component', () => {
  let ctrl;

  beforeEach(window.module(aboutUsModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(aboutUsComponent.selector, {
      $state: {}
    });
  }));

  it('should have a title', () => {
    const expected = 'SuperNova';
    const actual = ctrl.title;
    expect(actual).toMatch(expected);
  });
});
