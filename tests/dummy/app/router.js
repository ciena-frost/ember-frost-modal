import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('demo', { path: '/' })
  this.route('elsewhere')
  this.route('demo-e')
})

export default Router
