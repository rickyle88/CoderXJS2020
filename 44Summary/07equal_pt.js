//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
    // viết code ở đây.
    let p = str.split('').filter(function (p) { return p === 'p' }).length;
    let t = str.split('').filter(function (p) { return p === 't' }).length;
    return p === t;
}

// Regular expression
function equal_pt1(str) {
    // viết code ở đây.
    let count_p = (str.match(/p/g) || []).length;

    let count_t = (str.match(/t/g) || []).length;

    return count_p === count_t ? true : false;
}

console.log(equal_pt('paatpsts'));

// equal_pt('paatpsts')


// true