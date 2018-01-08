/**
 * Demo of frost-modal-form with optional progress indication
 * until a promise is returned from the onConfirm callback,
 * triggered with the showProgressUntilConfirmResolves option.
 */

import Ember from 'ember'
const {Controller, RSVP, inject, run} = Ember
const {service} = inject
const {Promise} = RSVP

export default Controller.extend({
  notifications: service('notification-messages'),
  queryParams: [
    'isFormVisible'
  ],

  isFormValid: true,
  isFormVisible: false,

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

  simpleBunsenValue: {
    firstName: 'Ada',
    lastName: 'Lovelace'
  },

  actions: {
    closeForm () {
      this.setProperties({
        isFormValid: true,
        isFormVisible: false,
        simpleBunsenValue: {
          firstName: 'Ada',
          lastName: 'Lovelace'
        }
      })
    },

    openForm () {
      this.set('isFormVisible', true)
    },

    info () {
      window.alert('OMG!')
    },

    /**
     * @returns {Promise} promise - a promise that resolves in a few seconds to imitate an async call
     */
    resolveLater () {
      this.get('notifications').addNotification({
        message: 'Showing progress indicator until async returns',
        type: 'success',
        autoClear: true,
        clearDuration: 3000
      })

      return new Promise((resolve) => {
        run.later(() => {
          resolve('success!')
        }, 3000)
      })
    },

    /**
     * Update _bunsenValue to the new formValue
     * @param {Object} formValue - the updated value from bunsen
     */
    updateFormValue (formValue) {
      this.set('simpleBunsenValue', formValue)
    },

    /**
     * Update formValid with the most recent validation data
     * @param {Object} validation - bunsen validation object
     */
    updateValidity (validation) {
      this.set('isFormValid', !validation.errors.length)
    }
  }
})
