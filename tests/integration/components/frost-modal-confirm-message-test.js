import {expect} from 'chai'
import {initialize as initializeSvgUse} from 'ember-frost-core/instance-initializers/svg-use-polyfill'
import {$hook, initialize as initializeHook} from 'ember-hook'
import wait from 'ember-test-helpers/wait'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

import {expectModalWithState} from 'dummy/tests/helpers/ember-frost-modal'

const test = integration('frost-modal-confirm-message')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    initializeHook()
    initializeSvgUse()
  })

  describe('render visible confirm modal', function () {
    let props

    beforeEach(function () {
      this.timeout(10000)

      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })

      props = {
        hook: 'confirm-dialog',
        isModalVisible: true,
        onConfirm: sinon.spy()
      }

      this.setProperties(props)

      this.render(hbs`
        {{frost-modal-outlet}}

        {{frost-modal-confirm-message
          hook=hook
          cancel=(hash
            isVisible=false
          )
          confirm=(hash
            text='100%'
          )
          isVisible=isModalVisible
          summary='I agree'
          title='Most definitely'
          onConfirm=onConfirm
          onClose=(action closeModal)
        }}
      `)

      return wait()
    })

    // it('renders visually as expected', function (done) {
    //   return capture('confirm', done, {
    //     targetElement: this.$('.frost-modal-outlet-container.message')[0],
    //     experimentalSvgs: true
    //   })
    // })

    it('renders as expected', function () {
      expectModalWithState({
        cancel: {
          visible: false
        },
        confirm: {
          text: '100%'
        },
        summary: 'I agree',
        title: 'Most definitely'
      })
    })

    describe('press confirm button', function () {
      beforeEach(function () {
        $hook('confirm-dialog-modal-confirm').click()
        return wait()
      })

      it('triggers the callback', function () {
        expect(props.onConfirm.called).to.equal(true)
      })

      it('closes', function () {
        expect($hook('confirm-dialog-modal')).to.have.length(0)
      })
    })
  })
})
