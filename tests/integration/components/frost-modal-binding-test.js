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
import { beforeEach } from 'mocha'
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
      this.set('isModalVisible', false)
      this.set('actions', {
        closeModal () {
          this.set('isModalVisible', false)
        }
      })

      this.render(hbs`
        {{frost-modal-outlet
          name='basic'
        }}

        {{frost-modal-binding 'basic-modal'
          closeOnOutsideClick=true
          hook='basic'
          isVisible=isModalVisible
          targetOutlet='basic'
          onClose=(action 'closeModal')
        }}
      `)

      expect($hook('basic-modal'), 'Modal is initially hidden')
        .to.have.length(0)

      this.set('isModalVisible', true)
      expect($hook('basic-modal'), 'Modal becomes visible')
        .to.have.length(1)

      $hook('basic-modal-confirm').click()
      expect($hook('basic-modal'), 'Modal is dismissed')
        .to.have.length(0)
    })
  }
)
