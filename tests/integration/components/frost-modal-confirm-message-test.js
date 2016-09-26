import Ember from 'ember'
const { run } = Ember
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {
  $hook,
  initialize as initializeHook
} from 'ember-hook'
import {
  initialize as initializeSvgUse
} from 'ember-frost-core/instance-initializers/svg-use-polyfill'
import sinon from 'sinon'
import { beforeEach } from 'mocha'

describeComponent(
  'frost-modal-confirm-message',
  'Integration: FrostModalConfirmMessageComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      initializeHook()
      initializeSvgUse()
    })

    it('renders', function (done) {
      this.timeout(10000)
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
      }}`)

      expect($hook('confirm-dialog-modal'), 'Is modal visible')
          .to.have.length(1)
      return capture('confirm', done, {
        targetElement: this.$('.frost-modal-outlet-container.message')[0],
        experimentalSvgs: true
      })
    })

    it('confirm triggers the callback and closes', function () {
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      const props = {
        hook: 'confirm-dialog',
        isModalVisible: true,
        onConfirm: sinon.spy()
      }
      run(() => {
        this.setProperties(props)
        this.render(hbs`
          {{frost-modal-outlet}}

          {{frost-modal-confirm-message
          hook=hook
          cancel=(hash
            isVisible=false
          )
          confirm=(hash
            text='100%'
          )
          isVisible=isModalVisible
          summary='I agree'
          title='Most definitely'
          onConfirm=onConfirm
          onClose=(action closeModal)
        }}`)

        $hook('confirm-dialog-modal-confirm').click()
        expect(props.onConfirm.called, 'Is confirm called').to.be.true
        expect($hook('confirm-dialog-modal'), 'Is modal hidden')
          .to.have.length(0)
      })
    })
  }
)
