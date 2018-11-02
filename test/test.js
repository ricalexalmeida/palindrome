let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let casePalindrome = new Phrase("RaceCar");
      assert(casePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctPalindrome.palindrome());
    });
  });

  describe("#letter", function() {
    it("should return only letters", function() {
      let punctPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctPalindrome.letters(), "MadamImAdam");
    });

    it("should return the empty string on no match", function() {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    })
  });
});
