import {expect} from 'chai'
import Ember from 'ember'
const {$} = Ember

const assign = Object.assign || Ember.assign || Ember.merge

/**
 * @typedef {Object} FrostModalButtonState
 * @property {Boolean} disabled - whether or not button should be disabled
 * @property {String} text - text that button should contain
 * @property {Boolean} visible - whether or not button should be visible
 */

/**
 * Verify button contains expected text
 * @param {jQuery} $button - jQuery instance containing button
 * @param {String} text - expected text
 */
export function expectButtonToHaveText ($button, text) {
  expect($button.text().trim()).to.equal(text)
}

/**
 * Verify button has correct state
 * @param {jQuery} $button - jQuery instance containing button
 * @param {FrostModalButtonState} state - expected state of button
 */
export function expectButtonWithState ($button, state) {
  state = assign({
    disabled: false,
    visible: true
  }, state)

  expectButtonWithVisibility($button, state.visible, state.text)

  if (state.visible) {
    expectButtonToHaveText($button, state.text)
  }
}

/**
 * Verify button is visible/not visible as expected
 * @param {jQuery} $button - jQuery instance containing button
 * @param {Boolean} [visible=true] - whether or not button should be visible
 * @param {String} [name=''] - name of button to use in test log messages
 */
export function expectButtonWithVisibility ($button, visible = true, name = '') {
  const length = visible ? 1 : 0
  const message = visible ? `${name} button is visible` : `${name} button is not visible`
  expect($button, message.trim()).to.have.length(length)
}

/**
 * Verify cancel button has correct state
 * @param {FrostModalButtonState} [state] - expected state of cancel button
 */
export function expectModalCancelButtonWithState (state = {}) {
  state = assign({
    text: 'Cancel'
  }, state)

  const $button = $('.frost-modal-dialog-footer-cancel-button')
  expectButtonWithState($button, state)
}

/**
 * Verify confirm button has correct state
 * @param {FrostModalButtonState} [state] - expected state of confirm button
 */
export function expectModalConfirmButtonWithState (state = {}) {
  state = assign({
    text: 'Confirm'
  }, state)

  const $button = $('.frost-modal-dialog-footer-confirm-button')
  expectButtonWithState($button, state)
}

/**
 * Verify modal has correct state
 * @param {FrostModalState} [state={}] - expected state of modal
 */
export function expectModalWithState (state = {}) {
  state = assign({
    cancel: {},
    confirm: {},
    visible: true
  }, state)

  expectModalWithVisibility(state.visible)

  if (!state.visible) {
    return
  }

  if ('title' in state) {
    expectModalWithTitle(state.title)
  }

  if ('subtitle' in state) {
    expectModalWithSubtitle(state.subtitle)
  }

  expectModalCancelButtonWithState(state.cancel)
  expectModalConfirmButtonWithState(state.confirm)
}

/**
 * Verify modal subtitle has expected text
 * @param {String} text - expected subtitle text
 */
export function expectModalWithSubtitle (text) {
  const $subtitle = $('.frost-modal-dialog-header-subtitle:visible')
  expect($subtitle.text().trim(), 'modal has expected subtitle').to.equal(text)
}

/**
 * Verify modal title has expected text
 * @param {String} text - expected title text
 */
export function expectModalWithTitle (text) {
  const $title = $('.frost-modal-dialog-header-title:visible')
    .clone().children().remove().end() // Remove subtitle DOM to get just the title

  expect($title.text().trim(), 'modal has expected title').to.equal(text)
}

/**
 * Verify whether or not a modal is visible
 * @param {Boolean} [visible=true] - whether or not modal should be visible
 */
export function expectModalWithVisibility (visible = true) {
  const length = visible ? 1 : 0
  const message = visible ? 'modal is visible' : 'modal is not visible'
  const $modals = $('.frost-modal-dialog:visible')
  expect($modals, message).to.have.length(length)
}

export default {
  expectButtonToHaveText,
  expectButtonWithState,
  expectButtonWithVisibility,
  expectModalCancelButtonWithState,
  expectModalConfirmButtonWithState,
  expectModalWithState,
  expectModalWithSubtitle,
  expectModalWithTitle,
  expectModalWithVisibility
}
