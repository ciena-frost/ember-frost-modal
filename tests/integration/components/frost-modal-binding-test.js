/* jshint expr:true */
import { expect } from 'chai'
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
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-binding}}
      //     template content
      //   {{/frost-modal-binding}}
      // `);

      this.render(hbs`{{frost-modal-binding}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
