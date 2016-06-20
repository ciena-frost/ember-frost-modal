/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'fixed-remodal',
  'Integration: FixedRemodalComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#fixed-remodal}}
      //     template content
      //   {{/fixed-remodal}}
      // `);

      this.render(hbs`{{fixed-remodal}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
