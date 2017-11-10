var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign
  return newObj
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = object
  return object
  delete object.key
  return object
}
