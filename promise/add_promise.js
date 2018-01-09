function fetchX() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    },500);
  })
}

function fetchY() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(6);
    },1500);
  })
}

function add(xPromise, yPromise) {
  return Promise.all([xPromise, yPromise])
    .then(function(values) {
      console.log(values);
      return values[0] + values[1]
    });
}

console.log(add(fetchX(), fetchY()).then(value => {
  console.log(value);
}));