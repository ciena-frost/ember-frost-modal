import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    onActionClick () {
      if (this.get('type') === 'confirm') {
        const confirm = this.get('confirm')
        if (confirm) {
          confirm()
        }
      }
      this.attrs['onClose']()
    }
  }

})
