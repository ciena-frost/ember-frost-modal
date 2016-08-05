/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  retainRules
} from 'ember-frost-modal/helpers/retain-rules';

describe('RetainRulesHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = retainRules(42);
    expect(result).to.be.ok;
  });
});
