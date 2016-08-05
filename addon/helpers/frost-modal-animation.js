import Ember from 'ember'
const {
  Helper
} = Ember

const form = function() {
  this.transition(
    this.toValue(true),
    this.use('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', { maxOpacity: 0.5 }]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-down', { duration: 300 }]
    }),
    this.reverse('explode', {
      pick: '.frost-modal-outlet-background',
      use: ['fade', { maxOpacity: 0.5 }]
    }, {
      pick: '.frost-modal-outlet-body',
      use: ['to-up', { duration: 300 }]
    })
  )
}

export function frostModalFormAnimation([type]) {
  switch (type) {
    case 'form':
      return form
    default:
      break;
  }
}

export default Helper.helper(frostModalFormAnimation);
