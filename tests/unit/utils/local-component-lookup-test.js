/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import localComponentLookup from 'ember-frost-modal/utils/local-component-lookup';

describe('localComponentLookup', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = localComponentLookup();
    expect(result).to.be.ok;
  });
});
