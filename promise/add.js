
function add(getX, getY, cb) {
  var x, y;
  getX(function(xVal) {
    console.log('xVal');
    x = xVal;
    if (y != undefined) {
      cb(x + y);
    }
  });
  getY(function(yVal) {
    y = yVal;
    if (x != undefined) {
      cb(x + y);
    }
  });
}

add((cb) => {
  setTimeout(() => {
    cb(5);
  }, 500)
}, (cb) => {
  setTimeout(() => {
    cb(6);
  }, 200)
}, (res) => {
  console.log('两数之和是' + res)
});