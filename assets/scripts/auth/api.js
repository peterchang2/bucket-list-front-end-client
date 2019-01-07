'use strict'

const store = require('../store.js')
const config = require('../config.js')

const signUp = function (inputData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = function (inputData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
const changePassword = function (inputData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    // Authorization: 'Token token=' + store.user.token
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
