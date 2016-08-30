import Ember from 'ember'
const { run } = Ember
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {
  $hook,
  initialize as initializeHook
} from 'ember-hook'
import { beforeEach } from 'mocha'

describeComponent(
  'frost-modal-form',
  'Integration: FrostModalFormComponent',
  {
    integration: true
  },
  function () {
    let props

    beforeEach(function () {
      initializeHook()
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isFormVisible', false)
      })
      props = {
        hook: 'form-dialog',
        isFormVisible: true,
        simpleBunsenChange: sinon.spy(),
        simpleBunsenModel: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string'
            },
            lastName: {
              type: 'string'
            },
            alias: {
              type: 'string',
              title: 'Nickname'
            },
            onlyChild: {
              type: 'boolean'
            },
            age: {
              type: 'number',
              title: 'Age'
            }
          },
          required: ['lastName']
        },
        simpleBunsenValue: {},
        onConfirm: sinon.spy()
      }
      run(() => {
        this.setProperties(props)
        this.render(hbs`
          {{frost-modal-outlet}}

          {{frost-modal-form
            form=(component 'frost-bunsen-form'
              bunsenModel=simpleBunsenModel
              hook='bunsen-form'
              onChange=simpleBunsenChange
              value=simpleBunsenValue
            )
            hook='form-dialog'
            isVisible=isFormVisible
            title='Easy peasy'
            onClose=(action closeModal)
            onConfirm=onConfirm
          }}
        `)
      })
    })

    it('renders', function () {
      expect($hook('form-dialog-modal')).to.have.length(1)
    })

    it('closes on cancel', function () {
      $hook('form-dialog-modal-cancel').click()
      expect($hook('form-dialog-modal'), 'Is modal hidden').to.have.length(0)
    })

    it('triggers function on confirm click', function () {
      $hook('form-dialog-modal-confirm').click()
      expect(props.onConfirm.called, 'Is confirm called').to.be.true
    })
  }
)
