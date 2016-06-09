import Ember from 'ember'

export default Ember.Component.extend({

  actions: {
    onActionClick () {
      if (this.get('type') === 'confirm') {
        if (this.attrs['onConfirm']) {
          this.attrs['onConfirm']()
          this.attrs['onClose']()
        }
      }
      if (this.get('type') === 'cancel') {
        this.attrs['onClose']()
      }
      const customAction = this.get('onActionClick')
      if (customAction) {
        customAction()
      }
    }
  }
})
