/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/

function removeDuplicate(array) {
    // write code here...
    return array.filter(function(v,i){
        return array.indexOf(v) === i;
    })
}

// removeDuplicate([1, 1, 2, 3, 3])


// [1, 2, 3]



// removeDuplicate([1, 2, 2, 3, 5])


// [1, 2, 3, 5]



// removeDuplicate([1, 2, 2, 4, 4])


// [1, 2, 4]