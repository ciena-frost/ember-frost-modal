import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  queryParams: [
    'isInfoVisible'
  ],

  boringSummary: 'I just thought you should know',
  isInfoVisible: false
})
