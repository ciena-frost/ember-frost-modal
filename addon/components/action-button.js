import Ember from 'ember'
import FrostButton from 'ember-frost-core/components/frost-button'
const { ViewUtils } = Ember

/**
 * @module
 * @augments module:ember-frost-core/components/frost-button
 */
export default FrostButton.extend({
  closeOnClick: true,
  /**
   * Sets up behavior for onClick event
   *
   * @function
   * @param  {Object} event The mouse click event
   * @return {Boolean} If user does Shift|Ctrl|Alt|Meta|Secondary + click, then exit the function
   * without doing the logic to execute the closure action
   */
  onclick: Ember.on('click', function (event) {
    if (!ViewUtils.isSimpleClick(event)) {
      return true
    }

    if (this.get('type') === 'confirm') {
      if (this.attrs['onConfirm']) {
        this.attrs['onConfirm']()
        if (this.get('closeOnClick')) {
          this.attrs['onClose']()
        }
      }
    }
    if (this.get('type') === 'cancel') {
      this.attrs['onClose']()
    }
    const customAction = this.get('onClick')
    if (customAction) {
      customAction()
    }
  })
})
