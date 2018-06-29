/**
 * Integration test for frost-modal-form
 */
import {expect} from 'chai'
import {$hook, initialize as initializeHook} from 'ember-hook'
import wait from 'ember-test-helpers/wait'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import {returnPromiseFromStub} from 'ember-test-utils/test-support/stub'
import hbs from 'htmlbars-inline-precompile'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

import {deps as modalDeps} from 'ember-frost-modal/components/frost-modal-binding'
import modalUtils from 'ember-frost-modal/test-support/frost-modal'

const test = integration('frost-modal-form')
describe(test.label, function () {
  test.setup()

  let props, sandbox

  beforeEach(function () {
    initializeHook()
    this.timeout(10000)
    sandbox = sinon.sandbox.create()
    sandbox.stub(modalDeps.Logger, 'error')

    props = {
      closeOnConfirm: true,
      confirm: {
        disabledText: 'Waiting',
        text: 'Confirm'
      },
      disableConfirmUntilOnConfirmResolves: true,
      hook: 'form-dialog',
      isFormVisible: true,
      simpleBunsenChange: sandbox.stub(),
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
      onClose: sandbox.stub(),
      onConfirm: sandbox.stub()
    }

    this.setProperties(props)
    this.render(hbs`
      {{frost-modal-outlet}}

      {{frost-modal-form
        buttons=buttons
        cancel=cancel
        closeOnConfirm=closeOnConfirm
        closeAfterOnConfirmResolves=closeAfterOnConfirmResolves
        confirm=confirm
        disableConfirmUntilOnConfirmResolves=disableConfirmUntilOnConfirmResolves
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
        helpUrl=helpUrl
        onConfirm=onConfirm
        onClose=onClose
      }}
    `)

    return wait()
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('should render', function () {
    expect($hook('form-dialog-modal')).to.have.length(1)
  })
  it('should have frost-modal-form class', function () {
    expect($hook('form-dialog-modal')).to.have.class('frost-modal-form')
  })
  it('should close on cancel', function () {
    $hook('form-dialog-modal-cancel').click()

    return wait()
      .then(() => {
        expect(props.onClose, 'Is modal hidden').to.have.callCount(1)
      })
  })

  it('should trigger function on confirm click', function () {
    $hook('form-dialog-modal-confirm').click()

    return wait()
      .then(() => {
        expect(props.onConfirm.called, 'Is confirm called').to.equal(true)
      })
  })

  it('should close on confirm when closeOnConfirm=true', function () {
    $hook('form-dialog-modal-confirm').click()

    return wait()
      .then(() => {
        expect(props.onClose, 'Is modal hidden').to.have.callCount(1)
      })
  })

  describe('when closeOnConfirm is false', function () {
    beforeEach(function () {
      this.set('closeOnConfirm', false)
      return wait()
    })

    it('should stay open', function () {
      $hook('form-dialog-modal-confirm').click()
      expect($hook('form-dialog-modal'), 'Is modal hidden').to.have.length(1)
    })
  })

  describe('when onConfirm returns a promise', function () {
    let resolver

    beforeEach(function () {
      resolver = returnPromiseFromStub(props.onConfirm)
    })

    function itShouldBePromiseAware (desc, {closeOnConfirm, disableConfirmUntilOnConfirmResolves}) {
      describe(desc, function () {
        beforeEach(function () {
          this.setProperties({
            closeOnConfirm,
            disableConfirmUntilOnConfirmResolves
          })
        })

        describe('when Confirm is clicked', function () {
          beforeEach(function () {
            $hook('form-dialog-modal-confirm').click()
            return wait()
          })

          it('should call onConfirm()', function () {
            expect(props.onConfirm).to.have.callCount(1)
          })

          it('should not invoke onClose', function () {
            expect(props.onClose).to.have.callCount(0)
          })

          // State before promise is resolved

          if (disableConfirmUntilOnConfirmResolves) {
            it('should have a disabled Confirm button with the overridden disabled settings', function () {
              modalUtils.expectModalConfirmButtonWithState({text: 'Waiting', disabled: true})
            })
          } else {
            it('should have an enabled Confirm button', function () {
              modalUtils.expectModalConfirmButtonWithState({text: 'Confirm', disabled: false})
            })
          }

          describe('when the onConfirm promise resolves', function () {
            beforeEach(function () {
              resolver.resolve('success!')
              return wait()
            })

            it('should not log an error', function () {
              expect(modalDeps.Logger.error).to.have.callCount(0)
            })

            if (disableConfirmUntilOnConfirmResolves) {
              it('should have an enabled Confirm button', function () {
                modalUtils.expectModalConfirmButtonWithState({text: 'Confirm', disabled: false})
              })
            }

            if (closeOnConfirm) {
              it('should invoke `onClose`', function () {
                expect(props.onClose).to.have.callCount(1)
              })
            } else {
              it('should not invoke `onClose`', function () {
                expect(props.onClose).to.have.callCount(0)
              })
            }
          })

          describe('when the onConfirm promise rejects', function () {
            beforeEach(function () {
              resolver.reject('failure!')
              return wait()
            })

            it('should log an error', function () {
              expect(modalDeps.Logger.error).to.have.been.calledWith('failure!')
            })

            if (disableConfirmUntilOnConfirmResolves) {
              it('should have an enabled Confirm button', function () {
                modalUtils.expectModalConfirmButtonWithState({text: 'Confirm', disabled: false})
              })
            }

            it('should not invoke `onClose`', function () {
              expect(props.onClose).to.have.callCount(0)
            })
          })
        })
      })
    }

    itShouldBePromiseAware('when closeOnConfirm and disableConfirmUntilOnConfirmResolves are true (default)', {
      closeOnConfirm: true,
      disableConfirmUntilOnConfirmResolves: true
    })

    itShouldBePromiseAware('when closeOnConfirm is true and disableConfirmUntilOnConfirmResolves is false', {
      closeOnConfirm: true,
      disableConfirmUntilOnConfirmResolves: false
    })

    itShouldBePromiseAware('when closeOnConfirm is false and disableConfirmUntilOnConfirmResolves is true', {
      closeOnConfirm: false,
      disableConfirmUntilOnConfirmResolves: true
    })

    itShouldBePromiseAware('when closeOnConfirm and disableConfirmUntilOnConfirmResolves are both false', {
      closeOnConfirm: false,
      disableConfirmUntilOnConfirmResolves: false
    })
  })

  describe('when onConfirm does not return a promise', function () {
    beforeEach(function () {
      props.onConfirm.returns(42)
    })

    describe('when Confirm is clicked', function () {
      beforeEach(function () {
        $hook('form-dialog-modal-confirm').click()
        return wait()
      })

      it('should not override confirm state', function () {
        modalUtils.expectModalConfirmButtonWithState({text: 'Confirm', disabled: false})
      })
    })
  })

  describe('when subtitle present', function () {
    beforeEach(function () {
      this.set('subtitle', 'Foo bar')
      return wait()
    })

    it('should render subtitle', function () {
      const $subtitle = this.$('.frost-modal-dialog-header-subtitle')
      expect($subtitle).to.have.length(1)
      expect($subtitle.text()).to.equal('Foo bar')
    })
  })

  describe('when subtitle not present', function () {
    beforeEach(function () {
      this.set('subtitle', undefined)
      return wait()
    })

    it('should not render subtitle DOM', function () {
      expect(this.$('.frost-modal-dialog-header-subtitle')).to.have.length(0)
    })
  })

  describe('when footer text present', function () {
    beforeEach(function () {
      this.set('footer', 'Foo bar')
      return wait()
    })

    it('should render footer text', function () {
      const $footer = this.$('.frost-modal-dialog-footer-content')
      expect($footer).to.have.length(1)
      expect($footer.text().trim()).to.equal('Foo bar')
    })
  })

  describe('when footer text not present', function () {
    beforeEach(function () {
      this.set('footer', undefined)
      return wait()
    })

    it('should not render footer text DOM', function () {
      expect(this.$('.frost-modal-dialog-footer-content')).to.have.length(0)
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

      return wait()
    })

    it('should render custom buttons plus cancel and create buttons', function () {
      expect(this.$('.frost-modal-dialog-footer button')).to.have.length(4)
    })
  })

  describe('when buttons not present', function () {
    beforeEach(function () {
      this.set('buttons', undefined)
      return wait()
    })

    it('should only render cancel and create buttons', function () {
      expect(this.$('.frost-modal-dialog-footer button')).to.have.length(2)
    })
  })

  describe('when helpUrl is present', function () {
    beforeEach(function () {
      this.set('helpUrl', 'test-url')
      return wait()
    })

    it('should render a help link', function () {
      expect(this.$('.frost-modal-dialog-header-help')).to.have.length(1)
    })

    it('should have the correct url', function () {
      expect(this.$('.frost-modal-dialog-header-help a').attr('href')).to.equal('/docs/test-url')
    })

    it('should have the correct icon', function () {
      expect(this.$('.frost-modal-dialog-help-icon')).to.have.length(1)
    })
  })
})
