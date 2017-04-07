import config from './config/environment'
import Ember from 'ember'
const {Router: EmberRouter} = Ember

var Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('demo', {path: '/'}, function () {
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
    this.route('helpers')
    this.route('info')
    this.route('overflow')
    this.route('overview', {path: '/'})
    this.route('remote-outlet')
    this.route('warn')
  })
  this.route('frost-modal-outlet-test')
})

export default Router
