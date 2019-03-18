// 判断对象是否相等

var obj1 = [1,2,3]
var obj2 = [1,2,3]


function eq (a, b) {
  // 判断+0 与 -0 1 / +0 !== 1 / -0
  if (a === b) return a !== 0 || 1 / a === 1 / b

  // `null` `undefined` 只等于自身（strict comparison）疑问？
  if (a == null || b == null) return false

  // NaN
  if (a !== a) return b !== b

  // 判断a的类型，如果是基本类型返回false
  var type = typeof a
  if (type !== 'function' && type !== 'object' && typeof b !== 'object') return false

  return deepEq(a, b)
}

var toString = Object.prototype.toString

function deepEq (a, b) {
  var className = toString.call(a)
  if (className !== toString.call(b)) return false
  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      return '' + a === '' + b
    case '[object Number]':
      if (+a !== +a) return +b !== +b
      return +a === 0 ? 1 / +a === 1 / b: +a === +b
    case '[object Date]':
    case '[object Boolean]':
    return +a === +b
  }

  var areArrays = className === '[object Array]'
  if (!areArrays) {
    // 过滤函数的情况  不太明白？？？
    if (typeof a != 'object' || typeof b != 'object') return false

    var aCtor = a.constructor, bCtor = b.constructor
    
  }
}

console.log(eq(new Number(-2), new Number(-2)))