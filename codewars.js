//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
const reverseSeq = n => {
    if(n>0){
      let result = []
       for (let i = n; i >= 1; i--) {
        result.push(i);
      }
      return result
  
    }
  }
  //https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
  function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
  }

  //https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
  function stringToArray(string){

    return string.split(' ');
 

}

//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
  }
