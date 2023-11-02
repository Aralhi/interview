/**
 * 数组去重
 */

//简单数组
let arr1 = [1, 2, 3, 4, 5, 6, 2, 3]
let arr2 = [1, 2, 3, 4, 5, 6, 5, 6]

// 利用Set去重
let result = Array.from(new Set([...arr1, ...arr2]))

// 还可以使用indexOf、includes、filter、Map去重

// 数组对象

arr1 = [{id: 1, name: '小明'}, {id: 2, name: '小红'}, {id: 4, name: '小刘'}]
arr2 = [{id: 1, name: '小明'}, {id: 2, name: '小红'}, {id: 3, name: '小王'}]

function uniqueFun_1(arr) {
  const map = new Map()
  return arr.filter(item => !map.has(item.id) && map.set(item.id, 1))
}

function uniqueFun_2(arr) {
  const obj = {}
  return arr.filter(item => !obj.hasOwnProperty(item.id) && (obj[item.id] = 1))
}