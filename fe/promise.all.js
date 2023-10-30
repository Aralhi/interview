// 实现Promise.all

/**
 * Promise.all 如何处理包含异常情况的情况。如果传入的 Promise 数组中有任何一个 Promise 对象被拒绝（rejected），
 * Promise.all 会立即拒绝，并且拒绝的原因是第一个被拒绝的 Promise 对象的原因。
 */

const promises = [
  1,
  Promise.reject(new Error('this is a error')),
  2,
  3]
// 原本功能
Promise.all(promises).then(result => {
  console.log('...original result', result)
}).catch(err => {
  console.error('....origin err', err)
})

// 自己实现
function all(promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let count = 0

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(result => {
        results[index] = result
        count++
        if (count === promises.length) {
          resolve(results)
        }
      }).catch(err => {
        reject(err)
      })
    })
    if (promises.length === 0) {
      resolve
    }
  })
}

async function test() {
  all(promises).then(res => {
    console.log('....all', res)
  }).catch(err => {
    console.error('....err', err)
  })
}

test()