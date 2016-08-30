/* jshint expr:true */
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
import { beforeEach } from 'mocha'
import {
  initialize as initializeSvgUse
} from 'ember-frost-core/instance-initializers/svg-use-polyfill'
import hbs from 'htmlbars-inline-precompile'

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

    it('renders', function (/* done*/) {
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
      // TODO uncomment once ember-cli-visual-acceptance issues are fixed
      // Ember.run.later(function () {
      //   return capture('about', {
      //     targetElement: this.$('.frost-modal-outlet-container.about')[0],
      //     experimentalSvgs: true
      //   })
      // }, 2000)
    })

    it('renders with product', function (/* done*/) {
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
      // TODO uncomment once ember-cli-visual-acceptance issues are fixed
      // Ember.run.later(function () {
      //   return capture('about-with-product', {
      //     targetElement: this.$('.frost-modal-outlet-container.about')[0],
      //     experimentalSvgs: true
      //   })
      // }, 2000)
    })

    it('renders about-with-multiple-versions', function (/* done*/) {
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
      // TODO uncomment once ember-cli-visual-acceptance issues are fixed
      // Ember.run.later(function () {
      //   return capture('about-with-multiple-verions', {
      //     targetElement: this.$('.frost-modal-outlet-container.about')[0],
      //     experimentalSvgs: true
      //   })
      // }, 2000)
    })

    it('renders about-with-product-and-multiple-versions', function (/* done*/) {
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
      // TODO uncomment once ember-cli-visual-acceptance issues are fixed
      // Ember.run.later(function () {
      //   return capture('about-with-product-and-multiple-verions', {
      //     targetElement: this.$('.frost-modal-outlet-container.about')[0],
      //     experimentalSvgs: true
      //   })
      // }, 2000)
    })
  }
)

// data-test={{hook (concat hook '-close')}}
// onclick={{action (action onClose)}}
// hook=(concat hook '-branding-strip')
// hook=(concat hook '-logo')
// hook=(concat hook '-product')
// data-test={{hook (concat hook '-version') index=index}}
// data-test={{hook (concat hook '-copyright')}}
