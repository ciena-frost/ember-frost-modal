import Ember from 'ember'
const { run } = Ember
import { expect } from 'chai'
import {
  $hook,
  initialize as initializeHook
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
      initializeHook()
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      run(() => {
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
      })
    })

    it('renders', function (/* done*/) {
      expect($hook('info-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
      // TODO uncomment once ember-cli-visual-acceptance issues are fixed
      // Ember.run.later(function () {
      //   return capture('info', {
      //     targetElement: this.$('.frost-modal-outlet-container.message')[0],
      //     experimentalSvgs: true
      //   })
      // }, 2000)
    })

    it('closes on confirm', function () {
      $hook('info-dialog-modal-confirm').click()

      expect($hook('info-dialog-modal'), 'Is modal hidden')
        .to.have.length(0)
    })
  }
)
