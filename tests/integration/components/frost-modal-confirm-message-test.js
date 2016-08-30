/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {
  $hook,
  initialize
} from 'ember-hook'
import { beforeEach } from 'mocha'

describeComponent(
  'frost-modal-confirm-message',
  'Integration: FrostModalConfirmMessageComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      initialize()
    })

    it('renders', function () {
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.set('isModalVisible', true)

      this.render(hbs`
        {{frost-modal-outlet}}

        {{frost-modal-confirm-message
        hook='confirm-dialog'
        cancel=(hash
          isVisible=false
        )
        confirm=(hash
          text='100%'
        )
        isVisible=isModalVisible
        summary='I agree'
        title='Most definitely'
        onClose=(action closeModal)
      }}`)

      expect($hook('confirm-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
      $hook('confirm-dialog-modal-cancel').click()

      expect($hook('confirm-dialog-modal'), 'Is modal hidden')
        .to.have.length(0)
    })
  }
)
