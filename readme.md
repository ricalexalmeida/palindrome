# Phrase object (with palindrome detector)

This is a sample NPM module created for Learn Enough JavaScript to Be Dangerous by Michael Hartl.

The module can be used as follows:

```
$ npm install --global ricalexalmeida-palindrome
$ vim test.js
let Phrase = require("ricalexalmeida-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
