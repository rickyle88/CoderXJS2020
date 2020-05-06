// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str) {
    // viết code ở đây.
    let arrStr = str.split(' ');
    if (arrStr[0].slice(0, 4) === 'Java') { return true; }
    else {
        return false;
    }
}