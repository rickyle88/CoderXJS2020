/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/FarflungIdioticExabyte
 */

function answer() {
    return `
    // Ghi câu trả lời ở đây
    false because mrThinh and mrDung pointing to different memory location
    
    `
  }
  
  function Person(name, age) {
    this.type = "person";/**
    * Chạy đoạn code phía dưới và giải thích kết quả
    * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
    */
   
   function answer() {
     return `
     // Ghi câu trả lời ở đây
     true because mrThinh and mrDung pointing to same memory location
     `
   }
   
   function Person(name, age) {
     this.type = "person";
     this.name = name;
     this.age = age;
   }
   
   Person.prototype.sing = function() {
     console.log(`Là lá la...`);
   };
   
   const mrThinh = new Person("Pham Thinh", 33);
   const mrDung = new Person("The Dung", 19);
   
   mrThinh.sing === mrDung.sing
   
    this.name = name;
    this.age = age;
  
    this.sing = function() {
      console.log(`Là lá la...`);
    };
  
  }
  
  const mrThinh = new Person("Pham Thinh", 33);
  const mrDung = new Person("The Dung", 19);
  
  mrThinh.sing === mrDung.sing
  