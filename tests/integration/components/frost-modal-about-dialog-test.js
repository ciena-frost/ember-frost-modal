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
import { beforeEach } from 'mocha'

describeComponent(
  'frost-modal-about-dialog',
  'Integration: FrostModalAboutDialogComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      initialize()
    })

    // TODO Get ember-cli-visual-acceptance plugged in before PR
    it('renders', function () {
      this.set('isModalVisible', true)

      this.render(hbs`
        {{frost-modal-about-dialog}}
      `)

      expect($hook('about-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
    })
  }
)

  // capture('about')
  // capture('about-with-product')
  // capture('about-with-multiple-verions')
  // capture('about-with-product-and-multiple-verions')

  // data-test={{hook (concat hook '-close')}}
  // onclick={{action (action onClose)}}
  // hook=(concat hook '-branding-strip')
  // hook=(concat hook '-logo')
  // hook=(concat hook '-product')
  // data-test={{hook (concat hook '-version') index=index}}
  // data-test={{hook (concat hook '-copyright')}}
