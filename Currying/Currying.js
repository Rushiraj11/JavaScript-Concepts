// Normal method without applying currying technique
function volume1(length, width, height) {
    return length * width * height;
 }
 console.log(volume1(5,2,3));


// applying currying technique
function volume(length) {
    return function(width) {
       return function(height) {
          return height * width * length;
       }
    }
 }
console.log(volume(11)(2)(3));
