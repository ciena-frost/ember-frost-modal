import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('demo', { path: '/' }, function() {
    this.route('overview', { path: '/' });
    this.route('remote-outlet');
    this.route('basic-binding');
    this.route('content-binding');
    this.route('blur');
    this.route('dialog');
    this.route('about');
    this.route('form');
    this.route('confirm');
    this.route('error');
    this.route('info');
    this.route('warn');
    this.route('overflow');
    this.route('dynamic-updates');
    this.route('animation-binding');
  })
})

export default Router
