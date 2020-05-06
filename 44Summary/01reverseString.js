// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
    // viết code ở đây.
    let reverseString = '';
    for(let s of str){
        reverseString = s + reverseString;
    }
    return reverseString;
}
// a + '' = 'a'
// 'b' + '

reverse('abc');