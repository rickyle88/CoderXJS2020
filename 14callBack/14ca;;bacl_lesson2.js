// - Yêu cầu viết 1 hàm `transformArray`, nhận vào 1 array và một hàm `transformer` bất kỳ, hàm này có nhiệm vụ biến đổi tuỳ ý từng phần tử trong array
// - Cho một hàm `toUpperCase` có nhiệm vụ biến đổi 1 string sang dạng uppercase

// - Một mảng các string
// - Hàm `toUpperCase`

// Mong muốn đầu ra của hàm là một array mới, trong đó các phần tử là phiên bản uppercase của phần tử tương ứng trong mảng đầu vào.



// Convert a string to upper case
function toUpperCase(str){
    return str.toUpperCase();
}

function transformArray(arr, transformer){
    // return arr.map(function(v){
    //     return transformer(v);
    // })

    const newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr[i] = transformer(arr[i]); // chú ý dòng này
    }
    return newArr;
}

// Call transformArray function
var arr = ['hi', 'my', 'name'];

console.log(transformArray(arr, toUpperCase));