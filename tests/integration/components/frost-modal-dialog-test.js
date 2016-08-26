/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frost-modal-dialog',
  'Integration: FrostModalDialogComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-dialog}}
      //     template content
      //   {{/frost-modal-dialog}}
      // `);

      this.render(hbs`{{frost-modal-dialog}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
