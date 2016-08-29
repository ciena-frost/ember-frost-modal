/* jshint expr:true */
/* global capture */
import {
  expect
} from 'chai'
import {
  $hook,
  initialize
} from 'ember-hook'
import {
  describeComponent,
  it
} from 'ember-mocha'
import {
  initialize as initializeSvgUse
} from 'ember-frost-core/instance-initializers/svg-use-polyfill'

import hbs from 'htmlbars-inline-precompile'

import Ember from 'ember'
describeComponent(
  'frost-modal-about-dialog',
  'Integration: FrostModalAboutDialogComponent', {
    integration: true
  },
  function () {
    beforeEach(function () {
      initialize()
      initializeSvgUse()
    })

    // TODO Get ember-cli-visual-acceptance plugged in before PR
    it('renders', function (done) {
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.set('isModalVisible', true)

      this.render(hbs `
        {{frost-modal-outlet}}

        {{frost-modal-about
          brandingStrip=(hash
            icon='branding-strip'
            pack='dummy'
          )
          copyright='copyright'
          hook='about-dialog'
          isVisible=isModalVisible
          logo=(hash
            icon='logo'
            pack='dummy'
          )
          product=(hash
            icon='product'
            pack='dummy'
          )
          versions=(array
            'Version: 1.0.0'
          )
          onClose=(action closeModal)
        }}
      `)
        // eslint-disable-next-line
      expect($hook('about-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
      Ember.run.later(function () {
        return capture('about', {
          targetElement: this.$('.frost-modal-outlet-container.about')[0],
          experimentalSvgs: true
        }).then(function () {
          done()
        }).catch(function (err) {
          done(err)
        })
      }, 2000)
    })

    it('renders with product', function (done) {
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.set('isModalVisible', true)

      this.render(hbs `
        {{frost-modal-outlet}}

        {{frost-modal-about
          brandingStrip=(hash
            icon='branding-strip'
            pack='dummy'
          )
          copyright='copyright'
          hook='about-dialog'
          isVisible=isModalVisible
          logo=(hash
            icon='logo'
            pack='dummy'
          )
          product=(hash
            icon='product'
            pack='dummy'
          )
          onClose=(action closeModal)
        }}
      `)
        // eslint-disable-next-line
      expect($hook('about-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
      Ember.run.later(function () {
        return capture('about-with-product', {
          targetElement: this.$('.frost-modal-outlet-container.about')[0],
          experimentalSvgs: true
        }).then(function () {
          done()
        }).catch(function (err) {
          done(err)
        })
      }, 2000)
    })

    it('renders about-with-multiple-verions', function (done) {
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.set('isModalVisible', true)

      this.render(hbs `
        {{frost-modal-outlet}}

        {{frost-modal-about
          brandingStrip=(hash
            icon='branding-strip'
            pack='dummy'
          )
          copyright='copyright'
          hook='about-dialog'
          isVisible=isModalVisible
          logo=(hash
            icon='logo'
            pack='dummy'
          )
          versions=(array
            'Version: 1.0.0' 'Version: 2.3.4'
          )
          onClose=(action closeModal)
        }}
      `)
        // eslint-disable-next-line
      expect($hook('about-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
      Ember.run.later(function () {
        return capture('about-with-multiple-verions', {
          targetElement: this.$('.frost-modal-outlet-container.about')[0],
          experimentalSvgs: true
        }).then(function () {
          done()
        }).catch(function (err) {
          done(err)
        })
      }, 2000)
    })

    it('renders about-with-multiple-verions', function (done) {
      this.timeout(10000)
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      this.set('isModalVisible', true)

      this.render(hbs `
        {{frost-modal-outlet}}

        {{frost-modal-about
          brandingStrip=(hash
            icon='branding-strip'
            pack='dummy'
          )
          copyright='copyright'
          hook='about-dialog'
          isVisible=isModalVisible
          logo=(hash
            icon='logo'
            pack='dummy'
          )
          product=(hash
            icon='product'
            pack='dummy'
          )
          versions=(array
            'Version: 1.0.0' 'Version: 2.3.4'
          )
          onClose=(action closeModal)
        }}
      `)
        // eslint-disable-next-line
      expect($hook('about-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
      Ember.run.later(function () {
        return capture('about-with-product-and-multiple-verions', {
          targetElement: this.$('.frost-modal-outlet-container.about')[0],
          experimentalSvgs: true
        }).then(function () {
          done()
        }).catch(function (err) {
          done(err)
        })
      }, 2000)
    })
  }
)

// capture('about')
// capture('about-with-product')
// capture('about-with-multiple-verions')
// capture('about-with-product-and-multiple-verions')

// data-test={{hook (concat hook '-close')}}
// onclick={{action (action onClose)}}
// hook=(concat hook '-branding-strip')
// hook=(concat hook '-logo')
// hook=(concat hook '-product')
// data-test={{hook (concat hook '-version') index=index}}
// data-test={{hook (concat hook '-copyright')}}
