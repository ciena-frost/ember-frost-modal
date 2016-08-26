/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-modal-about-dialog',
  'Integration: FrostModalAboutDialogComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-about-dialog}}
      //     template content
      //   {{/frost-modal-about-dialog}}
      // `);
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.render(hbs`
        {{frost-modal-outlet}}

        {{frost-modal-about-dialog
        onClose=(action closeModal)
        }}`
      )
      expect(this.$()).to.have.length(1)
    })
  }
)
