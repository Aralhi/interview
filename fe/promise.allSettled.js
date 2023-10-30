// 实现Promise.allSettled 的polyfill，不能使用async和await

function allSettled(promises) {
  return new Promise((resolve) => {
    const results = []
    let count = 0

    promises.forEach((promise, index) => {
      promise.then(result => {
        handleResult({
          status: 'fulfilled',
          value: result
        }, index)
      }).catch(error => {
        handleResult({
          status:'rejected',
          reason: error
        }, index)
      })
    });

    function handleResult(result, index) {
      results[index] = result
      count++
      if (count === promises.length) {
        resolve(results)
      }
    }
  })
}

// test
const promises = [
  Promise.resolve(1),
  Promise.reject(new Error('this is a error!')),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 2000)
  })
]

async function test() {
  const result = await allSettled(promises)
  console.log('.....result ', result)
}

test()