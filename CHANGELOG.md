# 10.0.0 (2018-02-07)
* **Removed** package-lock until we are ready to support node 8
* **Added** ignore the linting of the `CHANGELOG.md`
* **Added** ignoring of `package-lock` until we are ready to move to node 8
* **Removed** useLintTree ember-cli-mocha configuration from `ember-cli-build.js`
* **Removed** `.remarkrc` file since it is now provided by `ember-test-utils`
* **Removed** `ember-cli-visual-acceptance` package and related files
* **Removed** the blueprint file since packages are now included via dependencies
* **Updated** `ember-browserify` to `^1.2.0`
* **Added** `ember-frost-test`@ `^4.0.0`
* **Updated** `ember-cli-chai` to `0.4.3`
* **Updated** `ember-cli-mocha` to `0.14.4`
* **Updated** `ember-sinon` to `^0.7.0`
* **Updated** `ember-test-utils` to `^8.1.0`
* **Updated** `sinon-chai` to `^2.14.0`
* **Updated** `ember-cli-code-coverage` to `0.3.12`
* **Updated** `ember-cli-frost-blueprints` to `^5.0.1`
* **Removed** no longer needed `ember-cli-import-polyfill` package
* **Removed** unused `ember-cli-moment-shim` package
* **Removed** unused `ember-cli-release` package
* **Removed** unused `ember-cli-sri` package
* **Updated** `ember-computed-decorators` to `0.3.0`  and moved to a dependency instead of a devDependency
* **Updated** `ember-concurrency` to `0.7.19`
* **Updated** `ember-elsewhere` to be a dependency instead of a devDependency
* **Removed** unused `ember-fetch` package
* **Updated** `ember-frost-bunsen` to `^17.0.0`
* **Removed** unused `ember-frost-date-picker` package
* **Removed** unused `ember-frost-fields` package
* **Removed** unused `ember-frost-popover` package
* **Removed** unused `ember-frost-table` package
* **Updated** `ember-frost-tabs` to `^7.0.0`
* **Updated** `ember-get-config` to `0.2.2` and moved to a dependency instead of a devDependency
* **Updated** `ember-hook` to `1.4.2` and moved to a dependency instead of a devDependency
* **Updated** `ember-ignore-children-helper` to `1.0.0` and moved to a dependency instead of a devDependency
* **Removed** unused `ember-moment` package
* **Updated** `ember-prop-types` to `^6.0.1` and moved to a dependency instead of a devDependency
* **Removed** unused `ember-spread` package
* **Updated** `ember-truth-helper` to `^1.3.0`
* **Updated** `liquid-fire` to be a dependency instead of a devDependency
* **Updated** `ember-cli-sass` to `7.1.1`
* **Updated** `ember-frost-core` to `^5.1.1`
* **Updated** code coverage configuration with reporters
* **Removed** unused `clockpicker-seconds` bower package
* **Removed** unused `resemblejs` bower package
* **Removed** unused `node-uuid` bower package
* **Removed** unused `es6-promise` bower package

# 9.0.0 (2018-01-17)
* Remove `tabIndex` support on "Cancel" and "Confirm" buttons per the discussion in #112 


# 8.1.0 (2018-01-12)
- **Upgraded** `closeOnConfirm` to be promise-aware. If `onConfirm` returns a Promise, the modal will call `onClose` once that Promise resolves.  (Errors will leave the modal open.)
- **Added** optional `disableConfirmUntilOnConfirmResolves` flag, and the ability to specify different text for a disabled confirm button.  This behavior defaults to `true`, and is only active when handling an `onConfirm` that returns a Promise.
- **Upgraded** demo pages for `frost-modal-form` so that they show more realistic form modal usage
- **Added** support for `title` tooltips on modal buttons
- **Added** `chai-jquery`, `sinon-chai` devDependencies
- **Updated** to version `^8.1.0` of `ember-test-utils`
- **Added** eslint configuration options to allow existing test names
- **Fixed** some linting per updated linting rules
- **Fixed** demo notifications so that they show above the blur layer

  
  
  

# 8.0.0 (2018-01-10)
* Update `ember-frost-core` to latest major

# 7.0.3 (2018-01-02)
* Demo, and docs use object instead of hash (For Emb


# 7.0.2 (2017-11-14)
* Remove unused `ember-simple-uuid` dependency

# 7.0.1 (2017-11-14)
* #118 - Bind context to call of this._super.included() in index.js

# 7.0.0 (2017-11-08)
* Use the latest `ember-frost-core`, with a flexible minor version (`^3.0.1`)


# 6.2.13 (2017-08-30)
* Fixes #114 
  * Use ember-cli-notifications latest - v4.2.0 was using a beta version of ember-css-modules


# 6.2.12 (2017-08-29)
* fixes for issues #95 and #103

# 6.2.11 (2017-08-28)
* Upgrade ember-cli 2.12.3 inter-dependencies

# 6.2.10 (2017-08-11)
* Upgrade ember-cli 2.12.3 inter-dependencies

# 6.2.9 (2017-07-11)
* Upgrade `ember-cli` to 2.12.3

# 6.2.8 (2017-06-06)
* **Fixed** `config/environment.js` to no longer impact consuming app environment
(resolves [#108](https://github.com/ciena-frost/ember-frost-modal/issues/108))

# 6.2.7 (2017-06-03)
* **Enabled** code coverage checking and set an initial baseline coverage
* **Fixed** propType warnings (resolves [#106](https://github.com/ciena-frost/ember-frost-modal/issues/106))
* **Enabled** propType errors (instead of warnings) within the addon so the above doesn't regress

# 6.2.6 (2017-05-11)
* **Updated** the secure auth tokens in `.travis.yml`


# 6.2.5 (2017-04-25)
- Removed max-width from dialog modal


# 6.2.4 (2017-04-21)
* **Removed** unnecessary dependencies from blueprint


# 6.2.3 (2017-04-21)
* **Added** blueprint check


# 6.2.2 (2017-04-20)
-Modifications to align with UX spec

# 6.2.1 (2017-04-11)

* **Fixed** icons so they stop disappearing on a subsequent render.


# 6.2.0 (2017-04-11)

* **Upgraded** to Ember 2.11.


# 6.1.4 (2017-04-07)

- fixes for issue #78 and #74.
- Upgraded ember-test-utils.
- Upgraded Ember to 2.11

# 6.1.3 (2017-03-20)
* **Used** info, warning and error icons from `ember-frost-core`

# 6.1.2
* **Updated** the travis.yml and package.json to run code coverage

# 6.1.1
* **Updated** to use latest pr-bumper which supports being able to set a PR to `none` when publishing a new version is
not desired.


# 6.1.0
* **Updated** integration tests to remove the deprecated use of `describeComponent()`
* **Updated** service unit test to use setupTest() from `ember-mocha`
* **Updated** `ember-test-utils` version

# 6.0.6
**added** `isVisible` to any custom buttons


# 6.0.5

* **Fixed** broken test helper.


# 6.0.4
* **Fixed** #71


# 6.0.3
**adding** a classModifier for the contained modal.



# 6.0.2
* **Removed** duplicate icon `warn`


# 6.0.1
Updated blueprint to include stable liquid fire and package.json to include bunsen ^13.0.0. All
functionality maintained.


# 6.0.0
* **Updated** `ember-frost-core` to `^1.0.0`


# 5.2.1
* Add icons
* Fix issue with frost-tabs

# 5.2.0
* Added tabIndex parameter to dialog buttons
* Gave cancel button a default tabIndex of 1 so that it comes after confirm button in tab order



# 5.1.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 5.1.0
Add ability to disabled Cancel button in dialog



# 5.0.1
**fix** gh-pages demo


# 5.0.0
**updated** node version to 6
**updated** coverage props


# 4.0.0
*upgrade* ember-prop-types to v3.x. Remove `this._super()` to support this.



# 3.11.2
Fixed issue with coverage not publishing



# 3.11.1

* **Fixed** code so it works with versions of Ember all the back to `2.3`.
* **Upgraded** dependencies.

# 3.11.0

* **Added** two new test helpers `expectButtonToBeDisabled()` and `expectButtonToBeEnabled()`.
* **Fixed** test helper `expectButtonWithState()` to check disabled state.


# 3.10.1

* Remove type-of dependency

# 3.10.0
* Remove warning when a component is passed in the footer
* Updated example to show component usage in footer

# 3.9.0
* Added closeOnConfirm (default true) to allow forms to submit and receive an API response prior to close



# 3.8.1
* Enable visual acceptance test
* Switch from Firefox to Chrome for testing env.


# 3.8.0

* **Added** two new test helpers: `expectModalWithContent()` and `expectModalWithIcon()`.
* **Added** `icon` and `content` support to `expectModalWithState()` test helper.



# 3.7.0

* **Added** two more test helpers: `clickModalCancelButton()` and `clickModalConfirmButton()`.
* **Fixed** bithound.io badge in [README](README.md).


# 3.6.0

* **Added** documentation for test helpers.


# 3.5.0

* **Added** test helpers that can be used by consumers.


# 3.4.0

* **Added** new `buttons` property to modals to allow user to specify additional buttons to show
between the cancel and confirm buttons in the modal footer.



# 3.3.0

* **Added** new `footer` property to modals that allows arbitrary text to be rendered in the left side of the footer.



# 3.2.0

* **Added** optional `subtitle` property to modals to support adding a subtitle to the header.
* **Upgraded** `devDependencies` to latest versions for demo app.



# 3.1.2
* Removed the hack for dynamically disabling confirm on forms
* Added a computed property for params that fires whenever attributes are updated
* Updated the info demo to demonstrate this ability in both the summary and confirm params



# 3.1.1
* Updated the info dialog demo to show a simple summary message binding



# 3.1.0
* Added a hack to allow confirm buttons on the frost-modal-form to be disabled - a better proxy
solution will be put in place shortly


# 3.0.1
* Added an controller action passed to the component in the content demo



# 3.0.0
* **Removed** ember-remodal based modals
* **Added** ember-elsewhere based modals
* **Added** more modal types - about, info, warning, confirmation, error, form
* **Added** documentation to the demo app



# 2.1.2

* Updated to latest version of `liquid-fire`.



# 2.1.1
 * **Reduced** specificity of SASS selectors
 * **Added** `CONTRIBUTING.md` to inform potential contributors
* **Added** `PULL_REQUEST_TEMPLATE.md` to ease intro into `pr-bumper`

# 2.1.0
* Added support to use the built in modalClose function only if needed

# 2.0.3
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 2.0.2

Destroy and recreate the modal content so that it can update on re-launch

Guard against a null destroy in perfect-scroll

# 2.0.1
 - Link to forked remodal temporary to force component re-rendering on dialog open/close

# 2.0.0
## Breaking
 - Changed the footer block controls interface to more cleanly support cancel, confirm and custom
 buttons within a single block-slot

# 1.0.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

