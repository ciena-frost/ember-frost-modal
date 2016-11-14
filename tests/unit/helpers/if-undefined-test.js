/* jshint expr:true */
import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import {
  ifUndefined
} from 'ember-frost-modal/helpers/if-undefined'

describe('IfUndefinedHelper', function() {
  let result
  describe('when conditional is undefined', function () {
    beforeEach(function () {
      result = ifUndefined([undefined, true, false])
    })

    it('should return expected result', function () {
      expect(result).to.equal(true)
    })
  })

  describe('when conditional is zero', function () {
    beforeEach(function () {
      result = ifUndefined([0, true, false])
    })

    it('should return expected result', function () {
      expect(result).to.equal(false)
    })
  })
})
