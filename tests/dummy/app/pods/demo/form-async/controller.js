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

  // This would often be imported from a separate file, or provided by an external API.
  bunsenModel: {
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

  bunsenValue: {
    firstName: 'Ada',
    lastName: 'Lovelace'
  },

  actions: {
    /**
     * Hide our form and reset the values
     */
    closeForm () {
      this.setProperties({
        isFormValid: true,
        isFormVisible: false,
        bunsenValue: {
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
     * Force delayed resolution so that we can demo async onConfirm behavior.
     * In a real app, this action would be an action that does something async
     * (such as make an API call), and returns a promise.
     *
     * @returns {Promise} promise - a promise that resolves in a few seconds to imitate an async call
     */
    doSomethingAsync () {
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
      this.set('bunsenValue', formValue)
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
