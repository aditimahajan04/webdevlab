/*
// 1. max() - Return largest of two numbers
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(5, 10));
*/

/*
// 2. maxOfThree() - Return largest of three numbers
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}
console.log(maxOfThree(5, 10, 3));
*/

/*
// 3. isVowel() - Check if character is a vowel
function isVowel(ch) {
  return 'aeiouAEIOU'.includes(ch);
}
console.log(isVowel('a')); // true
console.log(isVowel('b')); // false
*/

/*
// 4. translate() - Rövarspråket
function translate(text) {
  return text.split('').map(char => {
    if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) {
      return char + 'o' + char;
    }
    return char;
  }).join('');
}
console.log(translate("this is fun")); // "tothohisos isos fofunon"
*/

/*
// 5. sum() and multiply()
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
function multiply(arr) {
  return arr.reduce((a, b) => a * b, 1);
}
console.log(sum([1, 2, 3, 4])); // 10
console.log(multiply([1, 2, 3, 4])); // 24
*/

/*
// 6. reverse() - Reverse a string
function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse("jag testar")); // "ratset gaj"
*/

/*
// 7. Lexicon translation
const lexicon = {
  "merry": "god",
  "christmas": "jul",
  "and": "och",
  "happy": "gott",
  "new": "nytt",
  "year": "år"
};
function translateLexicon(text) {
  return text.split(' ').map(word => lexicon[word.toLowerCase()] || word).join(' ');
}
console.log(translateLexicon("merry christmas and happy new year")); // "god jul och gott nytt år"
*/

/*
// 8. findLongestWord()
function findLongestWord(words) {
  return words.reduce((max, word) => Math.max(max, word.length), 0);
}
console.log(findLongestWord(["one", "three", "seventeen"])); // 9
*/

/*
// 9. filterLongWords()
function filterLongWords(words, i) {
  return words.filter(word => word.length > i);
}
console.log(filterLongWords(["hello", "hi", "world", "wow"], 3)); // ["hello", "world"]
*/

/*
// 10. charFreq()
function charFreq(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
*/

/*
// 11. Basic calculator
function calculator(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Cannot divide by zero";
    default: return "Invalid operator";
  }
}
console.log(calculator(10, 5, '+')); // 15
*/

/*
// 12. Ask names until cancel, then sort
let names = [];
while (true) {
  let name = prompt("Enter a name (or click Cancel to finish):");
  if (name === null) break;
  names.push(name);
}
names.sort();
document.write("<ol>" + names.map(n => `<li>${n}</li>`).join('') + "</ol>");
*/

/*
// 13. Generate random numbers and calculate average
let count = prompt("How many random numbers?");
if (count !== null) {
  count = parseInt(count);
  let nums = Array.from({length: count}, () => Math.floor(Math.random() * 100));
  let avg = sum(nums);
  document.write(`Numbers: ${nums.join(", ")}<br>Average: ${avg / nums.length}`);
}
*/

/*
// 14. Registration form with validations
<!DOCTYPE html>
<html>
<body>
  <form id="regForm" onsubmit="return validateForm()">
    Name: <input type="text" id="name"><br>
    Username: <input type="text" id="username"><br>
    Password: <input type="password" id="password"><br>
    Confirm Password: <input type="password" id="confirm"><br>
    Year of Birth: <input type="text" id="year"><br>
    Email: <input type="text" id="email"><br>
    <input type="checkbox" id="terms"> I agree to the terms<br>
    <input type="submit" value="Register">
  </form>
  <script>
    function validateForm() {
      let uname = document.getElementById("username").value;
      let pass = document.getElementById("password").value;
      let confirm = document.getElementById("confirm").value;
      let email = document.getElementById("email").value;
      let year = document.getElementById("year").value;
      let terms = document.getElementById("terms").checked;

      if (!uname || !pass || !confirm || !email || !terms) {
        alert("All fields must be filled and terms agreed.");
        return false;
      }

      if (pass !== confirm) {
        alert("Passwords do not match.");
        return false;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Invalid email format.");
        return false;
      }

      if (!/^\d{4}$/.test(year) || year < 1900 || year > 2000) {
        alert("Year must be between 1900 and 2000.");
        return false;
      }

      return true;
    }
  </script>
</body>
</html>
*/

/*
// 15. XHTML + button alert
<button onclick="alert('Welcome')">Click me</button>
*/

/*
// 16. XHTML + hover alert
<a href="#" onmouseover="alert('Welcome')">Hover for a welcome message</a>
*/

/*
// 17. Form for name, age, hometown
<!DOCTYPE html>
<html>
<body>
  <form onsubmit="return showInfo()">
    Name: <input type="text" id="name"><br>
    Age: <input type="text" id="age"><br>
    Hometown: <input type="text" id="hometown"><br>
    <input type="submit" value="Submit">
  </form>
  <div id="output"></div>
  <script>
    function showInfo() {
      let name = document.getElementById("name").value;
      let age = parseInt(document.getElementById("age").value);
      let town = document.getElementById("hometown").value;
      let yearBorn = new Date().getFullYear() - age;
      document.getElementById("output").innerHTML = `
        <p>Hello ${name}, you were born in ${yearBorn}.</p>
        <p><a href="https://www.google.com/search?q=${encodeURIComponent(town)}" target="_blank">Search your hometown</a></p>
      `;
      return false;
    }
  </script>
</body>
</html>
*/

/*
// 18. Rollover image
<!DOCTYPE html>
<html>
<body>
  <img id="rollover" src="image1.jpg" width="200" height="200"
    onmouseover="this.src='image2.jpg';"
    onmouseout="this.src='image1.jpg';">
</body>
</html>
*/
