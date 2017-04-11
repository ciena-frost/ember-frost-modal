import {expect} from 'chai'
import {$hook, initialize} from 'ember-hook'
import wait from 'ember-test-helpers/wait'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

const test = integration('frost-modal-binding')
describe(test.label, function () {
  test.setup()

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
        classModifier='custom-class'
        closeOnOutsideClick=true
        hook='basic'
        isVisible=isModalVisible
        targetOutlet='basic'
        onClose=(action 'closeModal')
      }}
    `)

    return wait()
      .then(() => {
        expect($hook('basic-modal'), 'Modal is initially hidden')
          .to.have.length(0)

        this.set('isModalVisible', true)

        return wait()
      })
      .then(() => {
        expect($hook('basic-modal'), 'Modal becomes visible')
          .to.have.length(1)

        expect(this.$('.frost-modal-outlet-background').hasClass('custom-class'),
          'has class modifier').to.equal(true)
        expect(this.$('.frost-modal-outlet-container').hasClass('custom-class'),
          'has class modifier').to.equal(true)
        expect(this.$('.frost-modal-outlet-body').hasClass('custom-class'),
          'has class modifier').to.equal(true)

        $hook('basic-modal-confirm').click()

        return wait()
      })
      .then(() => {
        expect($hook('basic-modal'), 'Modal is dismissed')
          .to.have.length(0)
      })
  })
})
