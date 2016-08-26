import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('demo', { path: '/' }, function () {
    this.route('about')
    this.route('animation-binding')
    this.route('basic-binding')
    this.route('blur')
    this.route('confirm')
    this.route('content-binding')
    this.route('dialog')
    this.route('dynamic-updates')
    this.route('error')
    this.route('form')
    this.route('info')
    this.route('overflow')
    this.route('overview', { path: '/' })
    this.route('remote-outlet')
    this.route('warn')
  })
})

export default Router
