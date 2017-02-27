import destroyApp from '../helpers/destroy-app'
import startApp from '../helpers/start-app'
import {expect} from 'chai'
import {$hook} from 'ember-hook'
import {afterEach, beforeEach, describe, it} from 'mocha'

describe('Acceptance: FrostModalOutlet', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })

  // Due to how event.currentTarget is handled programatically
  // in jQuery and the use of the ignore-children helper, this
  // is the only way to test the outlet container click to dismiss
  // https://github.com/ef4/ember-ignore-children-helper/blob/master/addon/helpers/ignore-children.js#L6

  // The alternative would be to figure out how Ember is handling
  // the programmatic click here (appears to be region based + simulation
  // https://github.com/emberjs/ember.js/blob/v2.7.0/packages/ember-testing/lib/events.js#L29)

  describe('visit /frost-modal-outlet-test', function () {
    beforeEach(function () {
      return visit('/frost-modal-outlet-test')
    })

    it('renders as expected', function () {
      expect(currentPath()).to.equal('frost-modal-outlet-test')
      expect($hook('basic-modal'), 'Modal is initially hidden')
        .to.have.length(0)
    })

    describe('launch modal', function () {
      beforeEach(function () {
        return click($hook('launcher'))
      })

      it('renders as expected', function () {
        expect($hook('basic-modal'), 'Modal becomes visible')
          .to.have.length(1)
      })

      describe('dismiss modal', function () {
        beforeEach(function () {
          return click($hook('basic-modal-confirm'))
        })

        it('renders as expected', function () {
          expect($hook('basic-modal'), 'Modal is dismissed')
            .to.have.length(0)
        })
      })
    })
  })
})
