'use strict'

const store = require('../store.js')
const config = require('../config.js')

const upload = function (title, text) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/items/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'item': {
          'title': title,
          'text': text,
          'completed': false,
          'user_id': store.user._id
        }
      })
  })
}

const textUpdate = function (id, text) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/items/${id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'item': {
          'text': text,
          'user_id': store.user._id
        }
      })
  })
}

const getAllItems = function (inputData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/items/',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(inputData)
  })
}

const getImageId = function (imageId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/images/' + imageId,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteImageById = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/images/${id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const signIn = function (inputData) {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/sign-in/',
//     contentType: 'application/json',
//     data: JSON.stringify(inputData)
//   })
// }
//
// const changePassword = function (inputData) {
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/change-password/',
//     contentType: 'application/json',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: JSON.stringify(inputData)
//   })
// }
//
// const signOut = function (inputData) {
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + '/sign-out/',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  upload,
  getImageId,
  getAllItems,
  deleteImageById,
  textUpdate
}
