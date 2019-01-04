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
          'user_id': store.user.id
        }
      })
  })
}

const textUpdate = function (_id, text) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/items/${_id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'item': {
          'text': text,
          'user_id': store.user.id
        }
      })
  })
}
const titleUpdate = function (_id, title) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/items/${_id}`,
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(
      {
        'item': {
          'title': title,
          'user_id': store.user.id
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

// const getImageId = function (imageId) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/images/' + imageId,
//     contentType: 'application/json',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

const deleteItemById = function (_id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/items/${_id}`,
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
  getAllItems,
  deleteItemById,
  textUpdate,
  titleUpdate
}
