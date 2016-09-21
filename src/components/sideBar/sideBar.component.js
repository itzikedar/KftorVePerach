import './sideBar.less';
import template from './sideBar.html';

export let sideBarComponent = {
  templateUrl: template,
  selector: 'sideBar',
  bindings: {},
  /* @ngInject */
  controller: class sideBarCtrl {
    /* @ngInject */
    constructor($state) {
      // TODO - constructor arguments that should be available on "this"
      // should be added to the assign object
      Object.assign(this, { $state });
      this.title = 'SuperNova';
      this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
    }
  }
};
