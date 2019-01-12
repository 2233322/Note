// 通用遍历方法，遍历数组和对象，rturn false 退出遍历

/**
 * 数组遍历方法 ：性能排名
 * for ：1
 * forEach ES5 ： 2
 * for in: 不能获取下标 ： 5
 * map ： 4
 * for of ：3
 */

var arr = [1,2,3,4,5,6]

console.log('for')
// for
for (var i = 0, len = arr.length; i < len; i++){
  console.log(arr[i], i, arr)
}

console.log('forEach')
// forEach
arr.forEach(function(item, i, arr){
  console.log(item, i, arr)
})

console.log('for in')
// for in
for(var item in arr){
  console.log(arr[item], item, arr)
}

console.log('map')
// map
arr.map(function(item, i, arr){
  console.log(item, i, arr)
})

console.log('for of')
// for of
for(var item of arr){
  console.log(item, arr)
}



/**
 * 对象遍历
 * for in
 * Object.keys
 * Object.values
 * Object.getOwnPerpertyNames
 * Reflct.ownKeys
 */

var obj = {name: 'xyh', age: 20, sex: 'man'}

// for in
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key])
  }
}

// Object.keys(obj)
console.log(Object.keys(obj))
// Object.values(obj)
console.log(Object.values(obj))

Object.getOwnPropertyNames(obj).forEach(function(key, i, arr){
  console.log(obj[key], key, i)
})


console.log('Reflect.ownKeys', Reflect.ownKeys(obj))


/**
 * each
 */
console.log('each')
function each(obj, callback) {
  var length, i = 0
  if (Array.isArray(obj)) {
    length = obj.length
    for (; i < length; i++) {
      if (callback.call(obj[i], i, obj[i], obj) === false) break
    }
  } else {
    for (var key in obj) {
      if (callback.call(obj[key], key, obj[key], obj) === false) break
    }
  }
  return obj
}

each(arr, function(i, item, arr){
  if (i > 2) return false
  console.log(i, item, arr)
})

each(obj, function(key, value, obj){
  if (key === 'sex') return false
  console.log(key, value, obj)
})