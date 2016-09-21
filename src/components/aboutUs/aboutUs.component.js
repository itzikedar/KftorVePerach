import './aboutUs.less';
import template from './aboutUs.html';

export let aboutUsComponent = {
  templateUrl: template,
  selector: 'aboutUs',
  bindings: {
    texts:'<'
  },
  /* @ngInject */
  controller: class aboutUsCtrl {
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
