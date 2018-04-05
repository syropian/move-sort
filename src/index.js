const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max)
}

export default function(items = [], oldIndex = 0, newIndex = 0) {
  // Ensure we're passing an array
  if (items.constructor !== Array) {
    throw "First argument must be of type `Array`."
  }

  oldIndex = parseInt(oldIndex, 10)
  newIndex = parseInt(newIndex, 10)

  if (isNaN(oldIndex) || isNaN(newIndex)) {
    throw "Second and third arguments must be parseable integers."
  }

  // Hold the user's hand in case they do something silly like specify out-of-bounds indexes
  oldIndex = clamp(oldIndex, 0, items.length - 1)
  newIndex = clamp(newIndex, 0, items.length - 1)

  const itemRemovedArray = [...items.slice(0, oldIndex), ...items.slice(oldIndex + 1, items.length)]
  return [
    ...itemRemovedArray.slice(0, newIndex),
    items[oldIndex],
    ...itemRemovedArray.slice(newIndex, itemRemovedArray.length)
  ]
}
