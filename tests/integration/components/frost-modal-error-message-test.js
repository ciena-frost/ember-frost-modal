/* jshint expr:true */
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
  beforeEach
} from 'mocha'

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
      run(() => {
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
          }}`
        )
      })
    })

    it('renders', function (/*done*/) {
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
