import Ember from 'ember'
const {Helper} = Ember

// TODO Unique animation
const about = function () {
  this.transition(
    this.toValue(true),
    this.use('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', {maxOpacity: 0.5}]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-down', {duration: 300}]
    }),
    this.reverse('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', {maxOpacity: 0.5}]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-up', {duration: 300}]
    })
  )
}

// TODO Unique animation
const form = function () {
  this.transition(
    this.toValue(true),
    this.use('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', {maxOpacity: 0.5}]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-down', {duration: 300}]
    }),
    this.reverse('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', {maxOpacity: 0.5}]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-up', {duration: 300}]
    })
  )
}

// TODO Unique animation
const message = function () {
  this.transition(
    this.toValue(true),
    this.use('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', {duration: 300, maxOpacity: 0.7}]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-down', {duration: 300}]
    }),
    this.reverse('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', {duration: 300, maxOpacity: 0.0}]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-up', {duration: 300}]
    })
  )
}

// Predefined animations for various types of Frost modals
export function frostModalFormAnimation ([type]) {
  switch (type) {
    case 'about':
      return about
    case 'form':
      return form
    case 'message':
      return message
    default:
      break
  }
}

export default Helper.helper(frostModalFormAnimation)

export {about, form, message}
