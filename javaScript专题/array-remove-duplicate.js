// 数组去重

var arr1 = [1, 2, 1, 2, 2, '1', 2, '2', 1, 2, '1']

// 1. 双层for循环
function unique1(arr) {
  var res = []
  for (var i = 0, len = arr.length; i < len; i++) {
    for (var j = 0, reslen = res.length; j < reslen; j++) {
      if (arr[i] === res[j]) {
        break
      }
    }
    if (reslen == j) {
      res.push(arr[i])
    }
  }
  return res
}

// console.log(unique1(arr1))

// 2. indexOf 代替内层循环
function unique2(arr) {
  var res = []
  for (var i = 0, len = arr.length; i < len; i++) {
    var arri = arr[i]
    if (res.indexOf(arri) < 0) {
      res.push(arri)
    }
  }
  return res
}

// console.log(unique2(arr1))

// 3. es5 filter 简化外层循环
function unique3(arr) {
  var res = arr.filter(function (item, index, array) {
    console.log(array.indexOf(item))
   return array.indexOf(item) === index
  })
  return res
}

//console.log(unique3(arr1))

// 4. Ojbect

function unique4(arr) {
  var obj = {}
  var res = arr.filter(function(item, index, arr) {
    return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : obj[typeof item + JSON.stringify(item)] = true
  })
  return res
}

// console.log(unique4(arr1))

// 5. es6 Set

function unique5(arr) {
  return  Array.from(new Set(arr))
}

function unique6(arr) {
  return [...new Set(arr)]  // 解构...
}

var unique7 = (a) => [...new Set(a)]

console.log(unique7(arr1))