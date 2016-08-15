/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frost-modal-warn-message',
  'Integration: FrostModalWarnMessageComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-warn-message}}
      //     template content
      //   {{/frost-modal-warn-message}}
      // `);

      this.render(hbs`{{frost-modal-warn-message}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
