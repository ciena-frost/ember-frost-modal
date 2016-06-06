import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import { initialize } from 'ember-block-slots/initializers/component-block-slots'
import {beforeEach} from 'mocha'

describeComponent(
  'frost-modal',
  'Integration: EmberFrostModalComponent',
  {
    integration: true
  },
  function () {
    let container, application

    beforeEach(function () {
      Ember.testing = true
      Ember.run(() => {
        application = Ember.Application.create()
        container = application.__container__
        application.deferReadiness()
      })
      initialize(container, application)
    })

    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-simple-modal}}
      //     template content
      //   {{/frost-simple-modal}}
      // `)

      this.render(hbs`{{#frost-modal as |slot|}}
        {{#block-slot slot 'target'}}
          {{frost-button
            priority="primary"
            size="medium"
            text='Test basic dialog'
          }}
        {{/block-slot}}
        {{/frost-modal}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
