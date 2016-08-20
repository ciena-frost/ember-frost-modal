module.exports = {
  description: '',
  normalizeEntityName: function () {},

  /**
     Installs specified packages at the root level of the application.
     Triggered by 'ember install <addon name>'.

     @returns {Promise} package names and versions
   */
  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-cli-sass', target: '^5.2.0'},
        {name: 'ember-elsewhere', target: '~0.3.0'},
        {name: 'ember-frost-core', target: '>=0.23.0 <1.0.0'},
        {name: 'ember-hook', target: '^1.2.1'},
        {name: 'ember-ignore-children-helper', target: '^1.0.0'},
        {name: 'ember-prop-types', target: '^2.0.0'},
        {name: 'liquid-fire', target: '^0.24.1'}
      ]
    })
  }
}
