import {expect} from 'chai'
import Ember from 'ember'
import {initialize as initializeSvgUse} from 'ember-frost-core/instance-initializers/svg-use-polyfill'
import {$hook, initialize} from 'ember-hook'
import wait from 'ember-test-helpers/wait'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

const test = integration('frost-modal-about-dialog')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    initialize()
    initializeSvgUse()
  })

  it('renders', function () {
    this.timeout(10000)
    this.set('closeModal', () => {
      this.set('isModalVisible', false)
    })

    // We want to make sure we pass an `htmlSafe` string as a copyright, because `Ember.String.htmlSafe()` doesn't
    // actually return a string, and so this will make sure our propTypes for it are correct (@job13er 2017-06-02)
    this.setProperties({
      isModalVisible: true,
      copyright: Ember.String.htmlSafe('<p>Some copyright text</p>')
    })

    this.render(hbs `
      {{frost-modal-outlet}}

      {{frost-modal-about
        brandingStrip=(hash
          icon='company-strip'
          pack='dummy'
        )
        copyright=copyright
        hook='about-dialog'
        isVisible=isModalVisible
        logo=(hash
          icon='company'
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

    return wait()
    .then(() => {
      expect($hook('about-dialog-modal'), 'Is modal visible').to.have.length(1)

      // return capture('about', done, {
      //   targetElement: this.$('.frost-modal-outlet-container.about')[0],
      //   experimentalSvgs: true
      // })
    })
  })

  it('renders with product', function () {
    this.timeout(10000)
    this.set('closeModal', () => {
      this.set('isModalVisible', false)
    })
    this.set('isModalVisible', true)

    this.render(hbs `
      {{frost-modal-outlet}}

      {{frost-modal-about
        brandingStrip=(hash
          icon='company-strip'
          pack='dummy'
        )
        copyright='copyright'
        hook='about-dialog'
        isVisible=isModalVisible
        logo=(hash
          icon='company'
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

    return wait()
    .then(() => {
      expect($hook('about-dialog-modal'), 'Is modal visible').to.have.length(1)

      // return capture('about-with-product', done, {
      //   targetElement: this.$('.frost-modal-outlet-container.about')[0],
      //   experimentalSvgs: true
      // })
    })
  })

  it('renders about-with-multiple-versions', function () {
    this.timeout(10000)
    this.set('closeModal', () => {
      this.set('isModalVisible', false)
    })
    this.set('isModalVisible', true)

    this.render(hbs `
      {{frost-modal-outlet}}

      {{frost-modal-about
        brandingStrip=(hash
          icon='company-strip'
          pack='dummy'
        )
        copyright='copyright'
        hook='about-dialog'
        isVisible=isModalVisible
        logo=(hash
          icon='company'
          pack='dummy'
        )
        versions=(array
          'Version: 1.0.0' 'Version: 2.3.4'
        )
        onClose=(action closeModal)
      }}
    `)

    return wait()
      .then(() => {
        expect($hook('about-dialog-modal'), 'Is modal visible').to.have.length(1)

        // return capture('about-with-multiple-verions', done, {
        //   targetElement: this.$('.frost-modal-outlet-container.about')[0],
        //   experimentalSvgs: true
        // })
      })
  })

  it('renders about-with-product-and-multiple-versions', function () {
    this.timeout(10000)
    this.set('closeModal', () => {
      this.set('isModalVisible', false)
    })
    this.set('isModalVisible', true)

    this.render(hbs `
      {{frost-modal-outlet}}

      {{frost-modal-about
        brandingStrip=(hash
          icon='company-strip'
          pack='dummy'
        )
        copyright='copyright'
        hook='about-dialog'
        isVisible=isModalVisible
        logo=(hash
          icon='company'
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

    return wait()
      .then(() => {
        expect($hook('about-dialog-modal'), 'Is modal visible').to.have.length(1)

        // return capture('about-with-product-and-multiple-verions', done, {
        //   targetElement: this.$('.frost-modal-outlet-container.about')[0],
        //   experimentalSvgs: true
        // })
      })
  })
})
