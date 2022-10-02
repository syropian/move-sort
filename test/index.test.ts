import { describe, test, expect } from 'vitest'
import moveSort from '../src'

describe('move-sort', () => {
  test('returns a new sorted array', () => {
    const items = ['a', 'b', 'c', 'd', 'e']

    expect(moveSort(items, 4, 0)).toEqual(['e', 'a', 'b', 'c', 'd'])
  })

  test('constrains indexes to the bounds of the items', () => {
    const items = ['a', 'b', 'c', 'd', 'e']

    expect(moveSort(items, -1, 4)).toEqual(['b', 'c', 'd', 'e', 'a'])
    expect(moveSort(items, 1, -5)).toEqual(['b', 'a', 'c', 'd', 'e'])
    expect(moveSort(items, 2, 10)).toEqual(['a', 'b', 'd', 'e', 'c'])
    expect(moveSort(items, 8, 2)).toEqual(['a', 'b', 'e', 'c', 'd'])
  })
})
