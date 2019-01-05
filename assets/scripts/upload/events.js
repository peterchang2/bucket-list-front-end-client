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
  const caption = $('.update-text-form-' + event.target.attributes['data-id'].value).val()
  api.textUpdate(id, caption)
    .then(() => onGetAllItems(event))
  // .then(ui.captionUpdateSuccess)
    .catch(ui.failure)
}
const onTitleUpdate = function (event) {
  event.preventDefault()
  const id = $(event.target).parent('div').data('id')
  const title = $('.update-title-form-' + event.target.attributes['data-id'].value).val()
  api.titleUpdate(id, title)
    .then(() => onGetAllItems(event))
  // .then(ui.captionUpdateSuccess)
    .catch(ui.failure)
}

const onDeleteItem = function (event) {
  event.preventDefault()
  const _id = $(event.target).parents('div').data('id')
  api.deleteItemById(_id)
    .then(() => onGetAllItems(event))
    .catch(ui.failure)
}

const onCompleteItem = function (event) {
  event.preventDefault()
  const _id = $(event.target).parents('div').data('id')
  api.completeItemById(_id)
    // .then(ui.completedItemCross)
    .then(() => onGetAllItems(event))
    .catch(ui.failure)
}

module.exports = {
  onUpload,
  onGetAllItems,
  onDeleteItem,
  onCompleteItem,
  onTextUpdate,
  onTitleUpdate
}
