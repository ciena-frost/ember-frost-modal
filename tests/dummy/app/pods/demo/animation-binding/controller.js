import Ember from 'ember'
const {Controller} = Ember

export default Controller.extend({
  queryParams: [
    'isPredefinedVisible',
    'isLocalVisible'
  ],

  isPredefinedVisible: false,
  isLocalVisible: false,

  // BEGIN-SNIPPET local-animation
  localAnimation () {
    this.transition(
      this.toValue(true),
      this.use('explode', {
        pick: '.frost-modal-outlet-body',
        use: ['to-right', {duration: 300}]
      }),
      this.reverse('explode', {
        pick: '.frost-modal-outlet-body',
        use: ['to-left', {duration: 300}]
      })
    )
  }
  // END-SNIPPET
})
