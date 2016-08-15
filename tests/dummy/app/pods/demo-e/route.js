import Ember from 'ember'

export default Ember.Route.extend({
  queryParams: {
    isUserModalVisible: {
      as: 'user',
      replace: true
    }
  }
})
