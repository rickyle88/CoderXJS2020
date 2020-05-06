//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
    // viết code ở đây.	
    let arrStr = str.slice(0,n) + str.slice(n+1)

    return arrStr;
}

function omitCharAt2(str, n) {
    // viết code ở đây.	
    let result = '';
      for(let i = 0; i < str.length; i++){
          
          if(i!==n){
              result +=str[i];
          }
      }
      return result;
  }

//   Simply replace it with nothing:

// var string = 'F0123456'; // just an example
// string.replace(/^F0+/i, ''); '123456'

// Another way to do it:

// rnum = rnum.split("F0").pop()

// It splits the string in to two: ["", "123456"], then selects the last element
  

console.log(omitCharAt('abcd',1));