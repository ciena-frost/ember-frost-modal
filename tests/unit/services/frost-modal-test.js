import {expect} from 'chai'
import {setupTest} from 'ember-mocha'
import {beforeEach, describe, it} from 'mocha'

describe('Unit / Service / frost-modal', function () {
  setupTest('service:frost-modal', {
    unit: true
  })

  let service

  beforeEach(function () {
    service = this.subject()
  })

  it('exists', function () {
    expect(service).not.to.equal(undefined)
  })
})
