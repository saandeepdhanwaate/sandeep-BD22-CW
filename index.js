const express = require("express");
const app = express();
const port = 3000;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// even-numbers
function filterEvenNumbers(num) {
  return num % 2 === 0;
}
app.get("/even-numbers", (req, res) => {
  let evenNumbers = numbers.filter((num) => filterEvenNumbers(num));
  res.json(evenNumbers);
});

// adult-ages
let ages = [10, 20, 30, 15, 17, 25];
function filterAges(age) {
  return age >= 18;
}
app.get("/adult-ages", (req, res) => {
  let adultAges = ages.filter((age) => filterAges(age));
  res.json(adultAges);
});

// long-words
let words = ["apple", "banana", "cherry", "date", "fig", "grape"];
function filterLongWords(word){
  return word.length > 5
}
app.get('/long-words',(req,res)=>{
  let longWords = words.filter(word => filterLongWords(word))
  res.json(longWords)
})


// small-files
let fileSize = [50, 200, 75, 120, 30, 90, 150]
function filterSmallFiles(size,filterParam){
  return size < filterParam
}

app.get('/small-files',(req,res)=>{
  let filterParam = req.query.filterParam
  let files = fileSize.filter(size => filterSmallFiles(size,filterParam))
  res.json(files)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
