describe('checkVowel', function(){
  it("is true that the string starts with a vowel", function(){
    expect(checkVowel("apple")).to.equal("appleay");
  });
});

describe('checkConsonant', function(){
  it("is true that the beginning consonants will add to the end of word", function(){
    expect(checkConsonant("quit")).to.equal("uitqay");
  });
});

describe('checkQu', function(){
  it("is true that string starts with qu", function(){
    expect(checkQu("quote")).to.equal("otequay");
  });
});

describe('checkQuAfter', function (){
  it("is true that string starts with consonant, with qu following", function(){
    expect(checkQuAfter("square")).to.equal("aresquay");
  });
});

// it("is false that the string starts with a vowel", function(){
//   expect(checkVowel("brownies")).to.equal(false);
// });

// it("is true that the string starts with a consonant", function(){
//   expect(checkVowel("straight")).to.equal(3);
// });
