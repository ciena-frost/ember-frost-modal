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
  'frost-modal-warn-message',
  'Integration: FrostModalWarnMessageComponent',
  {
    integration: true
  },
  function () {
    let props

    beforeEach(function () {
      initializeHook()
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      props = {
        hook: 'warning-dialog',
        onCancel: sinon.spy(),
        isModalVisible: true
      }
      run(() => {
        this.setProperties(props)
        this.render(hbs`
          {{frost-modal-outlet}}
          {{frost-modal-warn-message
            cancel=(hash
              text='Nope'
            )
            hook=hook
            isVisible=isModalVisible
            summary='Take this'
            title="It's dangerous to go alone!"
            onCancel=onCancel
            onClose=(action closeModal)
          }}`)
      })
    })

    it('renders', function (/*done*/) {
      expect($hook(props.hook), 'Is modal visible')
        .to.have.length(1)

      // TODO uncomment once ember-cli-visual-acceptance issues are fixed
      // Ember.run.later(function () {
      //   return capture('warning-dialog', {
      //     targetElement: this.$('.frost-modal-outlet-container.message')[0],
      //     experimentalSvgs: true
      //   })
      // }, 2000)
    })

    it('cancel triggers callback and close', function  () {
      $hook('warning-dialog-modal-cancel').click()

      expect(props.onCancel.called, 'Callback triggered')
        .to.be.true
      expect($hook('warning-dialog-modal'), 'Is modal hidden')
        .to.have.length(0)
    })
  }
)
