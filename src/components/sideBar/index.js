import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import { sideBarComponent } from './sideBar.component';

export * from './sideBar.component';

export default angular.module('sideBar', [
  AppCore,
  uiRouter
])
  .config(config)
  .component(sideBarComponent.selector, sideBarComponent)
.name;
  // .config(config);

/* @ngInject */
function config ($stateProvider) {
  // $stateProvider
  //     .state('sideBar', {
  //         url: '/sideBar',
  //         template: '<other></other>'
  //     });
}
