import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { aboutUsComponent } from './aboutUs.component';
// import imageGrid from '../imageGrid'

export * from './aboutUs.component';

export default angular.module('aboutUs', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(aboutUsComponent.selector, aboutUsComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('aboutUs', {
  //         url: '/aboutUs',
  //         template: '<other></other>'
  //     });
}
