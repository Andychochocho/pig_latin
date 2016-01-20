// var vowel = ["a","e","i","o","u"]; {
//   // did not include y on purpose
// }


function checkVowel (string) {
  var vowel = ["a","e","i","o","u"];
  for (var i = 0; i < vowel.length; i++) {
    debugger;
    if (string[0] === vowel[i]) {
      return true;
    }
  }

};
