// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
    // viết code ở đây
    let strArr = str.split(' ');
    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(' ');
}

console.log(capitalize('hello world'));
