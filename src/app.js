import './css/style.less';
require('font-awesome-webpack');

import angular from 'angular';
// import Angular2To1 from 'angular2to1';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
/*eslint-disable */
import LocalStorageModule from 'angular-local-storage';
/*eslint-enable */
import AppCore from './core';
import { AppComponent } from './app.component';
import Home from './components/home';
import sideBar from "./components/sideBar"
import aboutUs from "./components/aboutUs"

import 'angular-material/angular-material.css'
const appName = 'myApp';
angular.module(appName, [
  // framework wide components
  AngularUiRouter,
  AngularAnimate,
  AngularSanitize,
  AngularBootstrap,
  angularAria,
  angularMaterial,

  // services
  'LocalStorageModule',
  AppCore,

  // ui-components
  Home,
  sideBar,
  aboutUs
])
.config(config)
.component(AppComponent.selector, AppComponent);

/* @ngInject */
function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix(appName);

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });

  $urlRouterProvider.otherwise('/');
}

angular.element(document).ready(() => {
  angular.bootstrap(document, [appName]);
});
