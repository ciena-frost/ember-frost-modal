import Ember from 'ember'
const { run } = Ember
import { expect } from 'chai'
import {
  $hook,
  initialize as initializeHook
} from 'ember-hook'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import { beforeEach, describe } from 'mocha'

describeComponent(
  'frost-modal-info-message',
  'Integration: FrostModalInfoMessageComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      initializeHook()
      this.set('closeModal', () => {
        this.set('isModalVisible', false)
      })
      run(() => {
        this.set('isModalVisible', true)

        this.render(hbs`
          {{frost-modal-outlet}}

          {{frost-modal-info-message
            buttons=buttons
            footer=footer
            hook='info-dialog'
            isVisible=isModalVisible
            subtitle=subtitle
            summary='Summary'
            title='Title'
            onClose=(action closeModal)
          }}
        `)
      })
    })

    it('renders', function (/* done*/) {
      expect($hook('info-dialog-modal'), 'Is modal visible')
        .to.have.length(1)
      // TODO uncomment once ember-cli-visual-acceptance issues are fixed
      // Ember.run.later(function () {
      //   return capture('info', {
      //     targetElement: this.$('.frost-modal-outlet-container.message')[0],
      //     experimentalSvgs: true
      //   })
      // }, 2000)
    })

    it('closes on confirm', function () {
      $hook('info-dialog-modal-confirm').click()

      expect($hook('info-dialog-modal'), 'Is modal hidden')
        .to.have.length(0)
    })

    describe('when subtitle present', function () {
      beforeEach(function () {
        this.set('subtitle', 'Foo bar')
      })

      it('renders subtitle', function () {
        const $subtitle = this.$('.frost-modal-dialog-header-subtitle')
        expect($subtitle).to.have.length(1)
        expect($subtitle.text()).to.equal('Foo bar')
      })
    })

    describe('when subtitle not present', function () {
      beforeEach(function () {
        this.set('subtitle', undefined)
      })

      it('does not render subtitle DOM', function () {
        expect(this.$('.frost-modal-dialog-header-subtitle')).to.have.length(0)
      })
    })

    describe('when footer text present', function () {
      beforeEach(function () {
        this.set('footer', 'Foo bar')
      })

      it('renders footer text', function () {
        const $footer = this.$('.frost-modal-dialog-footer-content')
        expect($footer).to.have.length(1)
        expect($footer.text().trim()).to.equal('Foo bar')
      })
    })

    describe('when footer text not present', function () {
      beforeEach(function () {
        this.set('footer', undefined)
      })

      it('does not render footer text DOM', function () {
        expect(this.$('.frost-modal-dialog-footer-content')).to.have.length(0)
      })
    })

    describe('when buttons present', function () {
      beforeEach(function () {
        this.set('buttons', [
          {
            priority: 'secondary',
            text: 'Foo'
          },
          {
            priority: 'secondary',
            text: 'Bar'
          }
        ])
      })

      it('renders custom buttons plus cancel and create buttons', function () {
        expect(this.$('.frost-modal-dialog-footer button')).to.have.length(4)
      })
    })

    describe('when buttons not present', function () {
      beforeEach(function () {
        this.set('buttons', undefined)
      })

      it('only renders cancel and create buttons', function () {
        expect(this.$('.frost-modal-dialog-footer button')).to.have.length(2)
      })
    })
  }
)
