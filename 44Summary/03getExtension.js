// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
    // viết code ở đây.
    // let arr =  filename.split('.');
    // return arr[arr.length - 1];
    let str = filename.split('.').pop();
    console.log(filename);
    return str;
}

console.log(getExtensionFilename('abc.mp3'));
