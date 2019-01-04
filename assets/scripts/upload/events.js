const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onUpload = function (event) {
  event.preventDefault()
  const uploadData = getFormFields(event.target)
  // console.log((uploadData.images.url).includes('jpg'))
  if (uploadData.item.title === '' || uploadData.item.text === '') {
    $('.upload-message-box').show(100)
    $('.upload-message-box').html(`Fields cannot be empty `)
    $('.upload-message-box').removeClass('success-message')
    $('.upload-message-box').addClass('error-message')
    $(event.target).trigger('reset')
    setTimeout(function () {
      $('.upload-message-box').fadeOut(200).empty(200)
    }, 2500)
  } else {
    // console.log('this is uploadData', uploadData.images.date)
    $(event.target).trigger('reset')
    api.upload(uploadData.item.title, uploadData.item.text)
      .then(() => onGetAllItems(event))
      .catch(ui.failure)
  }
}

const onGetAllItems = function (event) {
  event.preventDefault()
  api.getAllItems()
    .then(ui.getAllItemsSuccess)
    .catch(ui.failure)
}

const onTextUpdate = function (event) {
  event.preventDefault()
  const id = $(event.target).parent('div').data('id')
  const text = $('.update-text-form-' + event.target.attributes['data-id'].value).val()
  api.textUpdate(id, text)
    .then(console.log(id))
    .then(() => onGetAllItems(event))
  // .then(ui.captionUpdateSuccess)
    .catch(ui.failure)
}

// const onGetImage = function (event) {
//   event.preventDefault()
//   const imageData = getFormFields(event.target)
//   $(event.target).trigger('reset')
//   const imageId = imageData.images.id
//   console.log(imageId)
//   api.getImageId(imageId)
//     .then(ui.getImageIdSuccess)
//     .catch(ui.idFailure)
// }

const onDeleteItem = function (event) {
  event.preventDefault()
  const id = $(event.target).parents('div').data('id')
  api.deleteImageById(id)
    .then(() => onGetAllItems(event))
    .catch(ui.failure)
}

module.exports = {
  onUpload,
  onGetAllItems,
  onDeleteItem,
  onTextUpdate
}
