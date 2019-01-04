'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut

}
