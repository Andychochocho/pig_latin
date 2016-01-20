var vowel = ["a","e","i","o","u"];

function checkConsonant (string) {
  for (var j = 0; j < string.length; j++) {
    for (var i = 0; i < vowel.length; i++) {
      if (string.charAt([j]) !== vowel[i]) {
        //once you reach the first vowel in the string, the else statement begins
      } else {
        return string.slice([j]) + string.slice(0,[(j)]) + "ay";
      }
      }
    }
  };

function checkQu (string) {
  if (string.substring(0, 2) === "qu") {
    return string.slice(2) + "qu" + "ay";
 }
}

function checkVowel (string) {
  for (var i = 0; i < vowel.length; i++) {
    if (string[0] === vowel[i]) {
      return string + "ay";
    }
  };
};



 // !== vowel

 // else {
 // for (var i = 0; i = vowel[i]; i++) {
 //   vowel[i].contains('s');
 //   return i;
 //   break;
 //  }
//
// for (var i = 0; i < vowel.length; i++) {
//   for (var j = 0; j < string.length; j++ ) {
//     if (string.charAt)
//   }
// }
