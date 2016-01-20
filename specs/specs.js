describe('checkVowel', function(){
  it("is true that the string starts with a vowel", function(){
    expect(checkVowel("apple")).to.equal("appleay");
  });
});

describe('checkConsonant', function(){
  it("is true that the beginning consonants will add to the end of word", function(){
    expect(checkConsonant("strawberry")).to.equal("awberrystray");
  });
});
// it("is false that the string starts with a vowel", function(){
//   expect(checkVowel("brownies")).to.equal(false);
// });

// it("is true that the string starts with a consonant", function(){
//   expect(checkVowel("straight")).to.equal(3);
// });
