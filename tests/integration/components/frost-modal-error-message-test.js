/* jshint expr:true */
import Ember from 'ember'
const { A, run } = Ember
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
import { beforeEach } from 'mocha'

describeComponent(
  'frost-modal-error-message',
  'Integration: FrostModalErrorMessageComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      initializeHook()
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.set('things', A([]))
      const things = this.get('things')
      while (this.get('things').length < 50) {
        things.addObject(`Thing ${things.length + 1}`)
      }
      run(() => {
        this.set('isModalVisible', true)

        this.render(hbs`
          {{frost-modal-outlet}}
          {{frost-modal-error-message
            confirm=(hash
              isVisible=false
            )
            details=(component 'list-em' things=things)
            hook='error-dialog'
            isVisible=isModalVisible
            summary='Are you familiar with the old robot saying?'
            title='"Does not compute"'
            onClose=(action closeModal)
          }}`
        )
      })
    })

    it('renders', function (/* done*/) {
      expect($hook('error-dialog-modal'), 'Is modal visible')
          .to.have.length(1)
      // TODO uncomment once ember-cli-visual-acceptance issues are fixed
      // Ember.run.later(function () {
      //   return capture('error-dialog', {
      //     targetElement: this.$('.frost-modal-outlet-container.message')[0],
      //     experimentalSvgs: true
      //   })
      // }, 2000)
    })

    it('closes on cancel', function () {
      $hook('error-dialog-modal-cancel').click()

      expect($hook('error-dialog-modal'), 'Is modal hidden')
          .to.have.length(0)
    })
  }
)
