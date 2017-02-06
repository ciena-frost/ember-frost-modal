import {expect} from 'chai'
import {$hook, initialize} from 'ember-hook'
import {beforeEach, describe, it} from 'mocha'
import hbs from 'htmlbars-inline-precompile'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('frost-modal-about')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    initialize()
  })

  it('renders', function () {
    this.set('actions', {
      closeModal () {
        this.set('isModalVisible', false)
      }
    })
    this.set('isModalVisible', true)

    this.render(hbs`
      {{frost-modal-outlet}}

      {{frost-modal-about
        brandingStrip=(hash
          icon='company-strip'
          pack='dummy'
        )
        copyright='copyright'
        hook='about-dialog'
        isVisible=isModalVisible
        logo=(hash
          icon='company'
          pack='dummy'
        )
        product=(hash
          icon='product'
          pack='dummy'
        )
        versions=(array
          'Version: 1.0.0'
        )
        onClose=(action 'closeModal')
      }}
    `)

    expect($hook('about-dialog-modal'), 'Is modal visible')
      .to.have.length(1)

    $hook('about-dialog-modal-close').click()

    expect($hook('about-dialog-modal'), 'Is modal hidden')
      .to.have.length(0)
  })
})
