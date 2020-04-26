/**
 * Khai báo biến rectangle là 1 object gồm có các property:
 * - width: chiều rộng
 * - height: chiều dài
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều dài
 * - getArea: trả về diện tích
 */
 
var rectangle = {
    width: 5,
    height: 10,
    getWidth: function(){
        return this.width;
    },
    getHeight: function(){
        return this.height;
    },
    getArea: function(){
        return this.getHeight() * this.getWidth();
    }
  }