// 在数组中查找指定元素

/**
 * findIndex findLastIndex indexOf lastIndexOf
 */

/**
 * findIndex
 * ES6新增方法，返回第一个符合条件的数组成员的位置，如果都不符合返回-1
 * find
 * 返回第一个符合条件的数组成员，否则返回undefined
 */

function equal(value, index, arr) { 
  return value == 2
}

console.log([1,2,3,4,5,6,7].findIndex(equal)) // 1
console.log([1,2,3,4,5,6,7].find(equal)) // 2

// 实现findIndex findLastIndex

function findIndex(arr, func, context) {
  for (var i = 0; i < arr.length; i++) {
    if (func.call(context, arr[i], i, arr)) {
      return i
    }
    return -1
  }
}

function findLastIndex(arr, func, context) {
  var i = arr.length - 1
  for (; i >= 0; i--) {
    if (func.call(context, arr[i], i, arr)) {
      return i
    }
  }
  return -1
}


console.log(findLastIndex([1, 2, 3, 4, 5, 6], function (value, index, arr) {
  return value == 5
}))

// 利用不同参数返回不同函数 dir = 1  findIndex   dir = -1 findLastIndex

function createIndexFind(dir) {
  dir = dir || 1
  return function (arr, func, context) {
    var len = arr.length
    var i = dir > 0 ? 0 : len - 1
    for (; i < len && i >= 0; i += dir) {
      if (func.call(context, arr[i], i, arr)) {
        return i
      }
    }
    return -1
  }
}

var findIndex1 = createIndexFind(1)

console.log('createIndexFind', findIndex1([1, 2, 3, 4, 5, 6], function (value, index, arr) {
  return value > 4
}))

/**
 * sortedIndex 返回在有序数组中插入value在插入后依然有序的位置。
 * @example sortedIndex([1, 2, 6], 3) // 1
 * 
 */

function cb(func, context) {
  if (context === void 0) return func;
  return function () {
    return func.apply(context, arguments);
  };
}

function sortedIndex(arr, obj, iteratee, context) {
  // void 0 === undefined
  iteratee = cb(iteratee, context)
  var low = 0
  var high = arr.length - 1
  while (low < high) {
    var mid = Math.floor((low + high)/2)
    if (iteratee(arr[mid]) < iteratee(obj)) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  if (iteratee(arr[high]) < iteratee(obj)) {
    return high + 1
  }
  return high
}

var stooges = [{name: 'stooge1', age: 10}, {name: 'stooge2', age: 30}]
console.log('sortedIndex',
 sortedIndex(stooges,
 {name: 'stooge3', age: 6},
 function(stooges) {
   var result = stooges.age + this.age
   return result
},
{name: 'stooge4', age: 5},
))


// 利用不同参数返回不同函数 dir = 1 indexOf dir = -1 lastIndexOf

function createIndexOf(dir) {
  return function(arr, item, idx) {
    var len = arr.length
    if (typeof idx === 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max((idx + len), 0)
      } else {
        i = idx >= 0 ? Math.min(idx, len) : idx + len + 1
      }
    }

    for (; i < len && i >= 0; i += dir) {
      if (arr[i] === item) {
        return i
      }
    }
    return -1
  }
}

var indexOf1 = createIndexOf(1)
var indexOf2 = createIndexOf(-1)

console.log('indexOf1', indexOf1([1,2,3,4,5,6], 2, 2))
console.log('indexOf2', indexOf2([1, 2, 3, 4, 5, 6], 30, 4))

