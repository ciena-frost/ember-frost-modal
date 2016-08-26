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
  'frost-modal-about',
  'Integration: FrostModalAboutComponent',
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

        {{frost-modal-about
          brandingStrip=(hash
            icon='branding-strip'
            pack='dummy'
          )
          copyright='copyright'
          hook='about-dialog'
          isVisible=isModalVisible
          logo=(hash
            icon='logo'
            pack='dummy'
          )
          product=(hash
            icon='product'
            pack='dummy'
          )
          versions=(array
            'Version: 1.0.0'
          )
          onClose=(action closeModal)
        }}
      `)

      expect($hook('about-dialog-modal'), 'Is modal visible')
        .to.have.length(1)

      $hook('about-dialog-modal-close').click()

      expect($hook('about-dialog-modal'), 'Is modal hidden')
        .to.have.length(0)
    })
  }
)
