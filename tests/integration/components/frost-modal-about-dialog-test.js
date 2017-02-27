import {expect} from 'chai'
import {initialize as initializeSvgUse} from 'ember-frost-core/instance-initializers/svg-use-polyfill'
import {$hook, initialize} from 'ember-hook'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('frost-modal-about-dialog')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    initialize()
    initializeSvgUse()
  })

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
    // eslint-disable-next-line
    expect($hook('about-dialog-modal'), 'Is modal visible')
      .to.have.length(1)

    return capture('about', done, {
      targetElement: this.$('.frost-modal-outlet-container.about')[0],
      experimentalSvgs: true
    })
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
        onClose=(action closeModal)
      }}
    `)
    // eslint-disable-next-line
    expect($hook('about-dialog-modal'), 'Is modal visible')
      .to.have.length(1)
    return capture('about-with-product', done, {
      targetElement: this.$('.frost-modal-outlet-container.about')[0],
      experimentalSvgs: true
    })
  })

  it('renders about-with-multiple-versions', function (done) {
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
    // eslint-disable-next-line
    expect($hook('about-dialog-modal'), 'Is modal visible')
      .to.have.length(1)
    return capture('about-with-multiple-verions', done, {
      targetElement: this.$('.frost-modal-outlet-container.about')[0],
      experimentalSvgs: true
    })
  })

  it('renders about-with-product-and-multiple-versions', function (done) {
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
    // eslint-disable-next-line
    expect($hook('about-dialog-modal'), 'Is modal visible')
      .to.have.length(1)
    return capture('about-with-product-and-multiple-verions', done, {
      targetElement: this.$('.frost-modal-outlet-container.about')[0],
      experimentalSvgs: true
    })
  })
})

// data-test={{hook (concat hook '-close')}}
// onclick={{action (action onClose)}}
// hook=(concat hook '-branding-strip')
// hook=(concat hook '-logo')
// hook=(concat hook '-product')
// data-test={{hook (concat hook '-version') index=index}}
// data-test={{hook (concat hook '-copyright')}}
