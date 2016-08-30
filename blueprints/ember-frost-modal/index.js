module.exports = {
  description: '',
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-elsewhere', target: '~0.3.0'},
        {name: 'ember-frost-core', target: '>=0.23.0 <1.0.0'},
        {name: 'ember-get-config', target: '~0.1.3'},
        {name: 'ember-ignore-children-helper', target: '^1.0.0'},
        {name: 'liquid-fire', target: '~0.24.1'}
      ]
    })
  }
}
