// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    // your code here
    return array.find(function (item) {
        return item % 2 === 0;
    })
}

// findFirstEvenNumber([11, 13, 25, 29, 40])


// 40

// findFirstEvenNumber([33, 23, 17])


// undefined