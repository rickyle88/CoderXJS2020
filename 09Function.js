function calculateTriangleSquare(a, h) {
    return a * h / 2;

}

console.log(calculateTriangleSquare(10, 5));

function calculateCircleArea(r) {
    return r * r * 3.14;
}

function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}
var obj = {};
var newObj = addProperty(obj, 'name', 'David');
console.log(obj, newObj);bsbn