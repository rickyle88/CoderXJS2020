// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    // your code here!
    return arr.map(function(v){
        return (v % 2 === 0) ? v*v : v;
    })
}

// powerup([0, 3, 6, 7, 4])


// [0, 3, 36, 7, 16]