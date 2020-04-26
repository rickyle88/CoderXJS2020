/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */
 
function has(object, key) {
   return object.hasOwnProperty(key);
}

console.log(has({name: "Tom", age: 18}, "name"));
console.log(has({name: "Maria", age: 18}, "gender"));
// has({name: "Maria", age: 18}, "gender");