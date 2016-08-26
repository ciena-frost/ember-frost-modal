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

describeComponent(
  'frost-modal-binding',
  'Integration: FrostModalBindingComponent',
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

        {{frost-modal-binding 'basic-modal'
          hook='basic'
          isVisible=isModalVisible
          onClose=(action closeModal)
        }}
      `)

      expect($hook('basic-modal'), 'Is modal visible')
        .to.have.length(1)
    })
  }
)
