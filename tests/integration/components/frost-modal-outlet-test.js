/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-modal-outlet',
  'Integration: FrostModalOutletComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-outlet}}
      //     template content
      //   {{/frost-modal-outlet}}
      // `);

      this.render(hbs`{{frost-modal-outlet}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
