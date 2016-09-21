'use strict';
import sideBarModule, { sideBarComponent } from './index.js';
// if a mock json object is needed for tests
// import sideBarMock from '../../../tests/mocks/sideBar.mock.json';

describe('sideBar Component', () => {
  let ctrl;

  beforeEach(window.module(sideBarModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(sideBarComponent.selector, {
      $state: {}
    });
  }));

  it('should have a title', () => {
    const expected = 'SuperNova';
    const actual = ctrl.title;
    expect(actual).toMatch(expected);
  });
});
