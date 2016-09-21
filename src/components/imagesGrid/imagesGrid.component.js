import './imagesGrid.less';
import template from './imagesGrid.html';

export let imagesGridComponent = {
  templateUrl: template,
  selector: 'imagesGrid',
  bindings: {},
  /* @ngInject */
  controller: class imagesGridCtrl {
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
