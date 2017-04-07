import {expect} from 'chai'
import wait from 'ember-test-helpers/wait'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

const test = integration('frost-modal-blur-active')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    this.inject.service('frost-modal')

    this.render(hbs`
      <span id='active'>{{frost-modal-blur-active}}</span>
    `)

    this.modalName = 'foo-modal'
  })

  it('renders', function () {
    expect(this.$('#active').text().trim()).to.equal('false')
  })

  it('reflects the active state of the frost-modal service', function () {
    const active = true

    this.get('frost-modal').setState(this.modalName, active)

    return wait().then(() => {
      expect(this.$('#active').text().trim()).to.equal('true')
    })
  })

  it("doesn't blur when the noBlur property is true", function () {
    const active = true
    const noBlur = true

    this.get('frost-modal').setState(this.modalName, active, noBlur)

    return wait().then(() => {
      expect(this.$('#active').text().trim()).to.equal('false')
    })
  })
})
