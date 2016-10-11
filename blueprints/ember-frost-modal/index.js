module.exports = {
  description: '',
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-elsewhere', target: '0.4.1'},
        {name: 'ember-frost-core', target: '>=0.23.0 <1.0.0'},
        {name: 'ember-get-config', target: '0.1.11'},
        {name: 'ember-ignore-children-helper', target: '^1.0.0'},
        {name: 'liquid-fire', target: '0.25.0'}
      ]
    })
  }
}
