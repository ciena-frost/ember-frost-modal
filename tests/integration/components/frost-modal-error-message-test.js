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

describeComponent(
  'frost-modal-error-message',
  'Integration: FrostModalErrorMessageComponent',
  {
    integration: true
  },
  function () {
    beforeEach( function () {
      initialize()
    })

    it('renders', function () {
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.set('isModalVisible', true)

      this.render(hbs`
        {{frost-modal-outlet}}
        {{frost-modal-error-message
          confirm=(hash
            isVisible=false
          )
          hook='error-dialog'
          isVisible=isModalVisible
          links=(array
            (hash
              priority='secondary'
              route='demo.confirm'
              text='To safety!'
            )
          )
          summary='Are you familiar with the old robot saying?'
          title='"Does not compute"'
          onClose=(action closeModal)
        }}`)
        expect($hook('error-dialog-modal'), 'Is modal visible')
          .to.have.length(1)
        $hook('error-dialog-modal-cancel').click()

        expect($hook('error-dialog-modal'), 'Is modal hidden')
          .to.have.length(0)
      })
  }
)
