var arr = [10, 20, 30, 50, 50, 50, 50, 20, 20, 10, 22, 90];
var newArr = [];
arr.forEach(function (value) {
    if (newArr.indexOf(value) === -1) {
        newArr.push(value)
    }
})
console.log(newArr)