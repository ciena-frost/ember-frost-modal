/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frost-modal-footer',
  'Integration: FrostModalFooterComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-footer}}
      //     template content
      //   {{/frost-modal-footer}}
      // `);

      this.render(hbs`{{frost-modal-footer}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
