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
import {
  beforeEach
} from 'mocha'

describeComponent(
  'frost-modal-warn-message',
  'Integration: FrostModalWarnMessageComponent',
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
        {{frost-modal-warn-message
          cancel=(hash
            text='Nope'
          )
          hook='warning-dialog'
          isVisible=isModalVisible
          summary='Take this'
          title="It's dangerous to go alone!"
          onClose=(action closeModal)
        }}
      `)
      expect($hook('warning-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
      $hook('warning-dialog-modal-cancel').click()

      expect($hook('warning-dialog-modal'), 'Is modal hidden')
        .to.have.length(0)
    })
  }
)
