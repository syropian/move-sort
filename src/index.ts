function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export default function <T extends any[]>(
  items: T,
  oldIndex: number,
  newIndex: number
): T {
  oldIndex = clamp(oldIndex, 0, items.length - 1)
  newIndex = clamp(newIndex, 0, items.length - 1)

  const itemRemovedArray = [
    ...items.slice(0, oldIndex),
    ...items.slice(oldIndex + 1, items.length),
  ]

  return [
    ...itemRemovedArray.slice(0, newIndex),
    items[oldIndex],
    ...itemRemovedArray.slice(newIndex, itemRemovedArray.length),
  ] as T
}
