import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { imagesGridComponent } from './imagesGrid.component';
// import imageGrid from '../imageGrid'

export * from './imagesGrid.component';

export default angular.module('imagesGrid', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(imagesGridComponent.selector, imagesGridComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('imagesGrid', {
  //         url: '/imagesGrid',
  //         template: '<other></other>'
  //     });
}
