/* jshint expr:true */
import { expect } from 'chai'
import {
  $hook,
  initialize
} from 'ember-hook'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import { beforeEach } from 'mocha'

describeComponent(
  'frost-modal-info-message',
  'Integration: FrostModalInfoMessageComponent',
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

        {{frost-modal-info-message
          hook='info-dialog'
          isVisible=isModalVisible
          summary='Summary'
          title='Title'
          onClose=(action closeModal)
        }}
      `)

      expect($hook('info-dialog-modal'), 'Is modal visible')
        .to.have.length(1)

      $hook('info-dialog-modal-cancel').click()

      expect($hook('info-dialog-modal'), 'Is modal hidden')
        .to.have.length(0)
    })
  }
)
