function retornaPares(array) {
    return array.filter(function (num) {
        return num % 2 === 0;
    });
};

console.log(retornaPares([1, 2, 3, 4, 5, 6, 7, 8, 9]));