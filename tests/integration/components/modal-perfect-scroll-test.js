/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'modal-perfect-scroll',
  'Integration: ModalPerfectScrollComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#modal-perfect-scroll}}
      //     template content
      //   {{/modal-perfect-scroll}}
      // `);

      this.render(hbs`{{modal-perfect-scroll}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
