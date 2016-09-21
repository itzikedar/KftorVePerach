import APP_TEXTS from '../../assets/appTexts.const'

class HomeCtrl {
    /* @ngInject */
    constructor($state) {
        // TODO - constructor arguments that should be available on "this"
        // should be added to the assign object
        Object.assign(this, {$state});
        this.title = 'SuperNova';
        this.note = 'Angular 1.5x, Es6, Karma, Jasmine & Webpack, ui-router';
        this.appTexts = APP_TEXTS;
    }
}

export default HomeCtrl;
