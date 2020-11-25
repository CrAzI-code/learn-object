const { log } = console;

let listOfNumbers = [2, 3, 5, 7, 11];
log(listOfNumbers[5]);

log(listOfNumbers[2 - 1]);
log(listOfNumbers["length"]);
log(listOfNumbers.length);

let doh = "Doh";
console.log(typeof doh.toUpperCase);

let anObject = { left: 1, right: 2 };
log("left" in anObject);

const score = { visitors: 0, home: 0 };

// This is okay
score.home = 1;
// This isn't allowed

log(score);

let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry("me", "you");
log(addEntry("me", "you"));

log(addEntry(["work", "touched tree", "pizza", "running", "television"], true));
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

let age = 10;
let name = "stan";

let obj = { age, name };

let JOURNAL = ["u"]
for(let i = 0; i <  JOURNAL.length; i++){
  let entry = JOURNAL[i];
  log(JOURNAL);
  log(entry)
}