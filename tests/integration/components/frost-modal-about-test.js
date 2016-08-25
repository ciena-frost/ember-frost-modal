/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import { beforeEach } from 'mocha'
import hbs from 'htmlbars-inline-precompile'
import {
  $hook,
  initialize
} from 'ember-hook'

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
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-about}}
      //     template content
      //   {{/frost-modal-about}}
      // `);
      this.set('isAboutVisible', true)
      this.render(hbs`{{frost-modal-about
        brandingStrip=(hash
          icon='branding-strip'
          pack='dummy'
        )
        copyright=legalIpsum
        hook='about-dialog'
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
        onClose=(action (mut isAboutVisible) false)
      }}`)
      expect($hook('about-dialog')).to.have.length(1)
    })
  }
)
