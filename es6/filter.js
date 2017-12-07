var arr = [2, 4, 6, 8, 10, 11];

// const newArr = arr.filter(item => (item>5));
// console.log(newArr);

function filterLessThanFive(item) {
    return item > 5;
}

function filterOdd(item) {
    return (item%2) != 0;
}

function filter(arr, testFunction) {
    var filyeredArr = [];
    for (let index = 0; index < arr.length; index++) {
       if(testFunction(arr[index])){
           filyeredArr.push(arr[index]);
       }  
    }

    return filyeredArr;
}

console.log(filter(arr, filterOdd));