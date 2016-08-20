import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('demo', { path: '/' }, function() {
    this.route('overview', { path: '/' });
    this.route('remote-outlet');
    this.route('local-binding-basic');
    this.route('local-binding-content');
    this.route('background-blur');
    this.route('frost-modal-dialog');
    this.route('about');
    this.route('form');
    this.route('confirm');
    this.route('error');
    this.route('info');
    this.route('warn');
    this.route('transition');
    this.route('overflow');
    this.route('updates');
  })
})

export default Router
