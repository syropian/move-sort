import moveSort from "../src"
describe("move-sort", () => {
  it("returns a new sorted array", () => {
    const items = ["a", "b", "c", "d", "e"]

    expect(moveSort(items, 4, 0)).toEqual(["e", "a", "b", "c", "d"])
  })

  it("throws if the first argument is not an array", () => {
    const items = "invalidItems"
    expect(() => {
      moveSort(items, 0, 1)
    }).toThrow()
  })

  it("throws if either of the indexes are not parseable integers", () => {
    const items = ["a", "b", "c", "d", "e"]
    expect(() => {
      moveSort(items, 0, "bar").toThrow()
    })
    expect(() => {
      moveSort(items, "foo", 0).toThrow()
    })
    expect(() => {
      moveSort(items, "foo", "bar").toThrow()
    })
    expect(() => {
      moveSort(items, 0, "2").not.toThrow()
    })
    expect(() => {
      moveSort(items, "0", 2).not.toThrow()
    })
    expect(() => {
      moveSort(items, "0", "2").not.toThrow()
    })
  })

  it("constrains indexes to the bounds of the items", () => {
    const items = ["a", "b", "c", "d", "e"]

    expect(moveSort(items, -1, 4)).toEqual(["b", "c", "d", "e", "a"])
    expect(moveSort(items, 1, -5)).toEqual(["b", "a", "c", "d", "e"])
    expect(moveSort(items, 2, 10)).toEqual(["a", "b", "d", "e", "c"])
    expect(moveSort(items, 8, 2)).toEqual(["a", "b", "e", "c", "d"])
  })

  it("defaults both indexes to 0", () => {
    const items = ["a", "b", "c", "d", "e"]

    expect(moveSort(items)).toEqual(items)
  })
})
