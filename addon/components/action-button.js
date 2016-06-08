import Ember from 'ember';

export default Ember.Component.extend({
  init () {
    this._super(...arguments)
    if (this.get('type') === 'close') {
      // this.set('onActionClick', modalClose))
    } else if (this.get('type') === 'confirm') {
      const confirm = this.get('confirm')
      if (confirm) {
        this.set('onActionClick', confirm)
        // send modal close?
      }
    }
  },
  actions: {
    onActionClick () {
       const onActionClick = this.get('onActionClick')
       console.log('HERE')
       if (onActionClick) {
         onActionClick()
       }
     }
  }

})
