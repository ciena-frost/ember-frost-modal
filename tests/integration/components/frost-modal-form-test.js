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
import { beforeEach, describe } from 'mocha'

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
            buttons=buttons
            footer=footer
            form=(component 'frost-bunsen-form'
              bunsenModel=simpleBunsenModel
              hook='bunsen-form'
              onChange=simpleBunsenChange
              value=simpleBunsenValue
            )
            hook='form-dialog'
            isVisible=isFormVisible
            subtitle=subtitle
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

    describe('when subtitle present', function () {
      beforeEach(function () {
        this.set('subtitle', 'Foo bar')
      })

      it('renders subtitle', function () {
        const $subtitle = this.$('.frost-modal-dialog-header-subtitle')
        expect($subtitle).to.have.length(1)
        expect($subtitle.text()).to.equal('Foo bar')
      })
    })

    describe('when subtitle not present', function () {
      beforeEach(function () {
        this.set('subtitle', undefined)
      })

      it('does not render subtitle DOM', function () {
        expect(this.$('.frost-modal-dialog-header-subtitle')).to.have.length(0)
      })
    })

    describe('when footer text present', function () {
      beforeEach(function () {
        this.set('footer', 'Foo bar')
      })

      it('renders footer text', function () {
        const $footer = this.$('.frost-modal-dialog-footer-text')
        expect($footer).to.have.length(1)
        expect($footer.text().trim()).to.equal('Foo bar')
      })
    })

    describe('when footer text not present', function () {
      beforeEach(function () {
        this.set('footer', undefined)
      })

      it('does not render footer text DOM', function () {
        expect(this.$('.frost-modal-dialog-footer-text')).to.have.length(0)
      })
    })

    describe('when buttons present', function () {
      beforeEach(function () {
        this.set('buttons', [
          {
            priority: 'secondary',
            text: 'Foo'
          },
          {
            priority: 'secondary',
            text: 'Bar'
          }
        ])
      })

      it('renders custom buttons plus cancel and create buttons', function () {
        expect(this.$('.frost-modal-dialog-footer button')).to.have.length(4)
      })
    })

    describe('when buttons not present', function () {
      beforeEach(function () {
        this.set('buttons', undefined)
      })

      it('only renders cancel and create buttons', function () {
        expect(this.$('.frost-modal-dialog-footer button')).to.have.length(2)
      })
    })
  }
)
