function promiseAllWithConcurrency(promises, concurrency) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;
    let index = 0;
    let running = 0;

    function executePromise(promise) {
      const currentIndex = index;
      promise
        .then((result) => {
          console.log('...result', result)
          results[currentIndex] = result;
          count++;
          running--;

          if (count === promises.length) {
            resolve(results);
          } else {
            executeNext();
          }
        })
        .catch(reject);
    }

    function executeNext() {
      while (running < concurrency && index < promises.length) {
        executePromise(promises[index]);
        running++;
        index++;
      }
    }

    executeNext();
  });
}

const promises = [
  fetch('https://jsonplaceholder.typicode.com/todos/1'),
  fetch('https://jsonplaceholder.typicode.com/todos/2'),
  fetch('https://jsonplaceholder.typicode.com/todos/3'),
  fetch('https://jsonplaceholder.typicode.com/todos/4'),
  fetch('https://jsonplaceholder.typicode.com/todos/5'),
  fetch('https://jsonplaceholder.typicode.com/todos/6')
];

promiseAllWithConcurrency(promises, 1).then((res) => {
  console.log(res);
});