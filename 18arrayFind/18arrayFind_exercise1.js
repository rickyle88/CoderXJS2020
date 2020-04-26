/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
    // viết code ở đây.
    return array.find(function(item){
        return item % x === 0;
    })
}

// findDivisibleNum([1, 3, 4], 2)


// 4

// findDivisibleNum([1, 3, 4], 5)


// undefined

// findDivisibleNum([12, 2, 5, 7], 7)


// 7