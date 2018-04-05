# move-sort

[![Build Status](https://travis-ci.org/syropian/move-sort.svg?branch=master)](https://travis-ci.org/syropian/move-sort)

> Switch an array item's index and get a new sorted array.

## Install

```
$ yarn add move-sort
```

or

```
$ npm install move-sort --save
```

**or** include the UMD build, hosted by [unpkg](https://unpkg.com) in a `<script>` tag.

```js
<script src="//unpkg.com/move-sort" />
```

## Usage

```js
// ES6 (check out the tests for more examples)
import moveSort from "move-sort"
const items = ["a", "b", "c", "d", "e"]
const sortedItems = moveSort(items, 4, 0)

console.log(sortedItems) // returns ["e", "a", "b", "c", "d"]
```

```js
// Browser (include the UMD build in a <script> tag as shown above)
const items = ["a", "b", "c", "d", "e"]
const sortedItems = MoveSort(items, 1, 3)
// or
const sortedItems = window.MoveSort(items, 1, 3)
console.log(sortedItems) // returns ["a", "c", "d", "b", "e"]
```

**Note:** `move-sort` always generates a new array, and will never mutate the original array you pass into it.

## API

### moveSort(items, startIndex, endIndex)

#### items

Type: `Array`

Default: `[]`

The original array you want to generate a sorted array for.

#### startIndex

Type: `integer`

Default: `0`

The index of the inital element in the array you want to move.

#### endIndex

Type: `integer`

Default: `0`

The target index of the inital element in the array you want to move it to.

### Index constraints

The start and end index arguments are run through `parseInt()` and clamped to the bounds of the `items` array. Indexes less than `0` will become `0` and indexes greater than `(items.length - 1)` will become `(items.length - 1)`.

## Development

```bash
# To run the tests
$ npm test
# or
$ npm run watch-test

# To publish the dist files
$ npm run build
```

## License

MIT © [Collin Henderson](https://github.com/syropian)
