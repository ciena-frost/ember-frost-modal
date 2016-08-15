/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frost-modal-info-message',
  'Integration: FrostModalInfoMessageComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-info-message}}
      //     template content
      //   {{/frost-modal-info-message}}
      // `);

      this.render(hbs`{{frost-modal-info-message}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
