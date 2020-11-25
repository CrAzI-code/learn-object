const {log} = console

// let journal = [];

// function addEntry(events, squirrel){
//     journal.push({events, squirrel});
//     return journal;
// }

// addEntry(["work", "touched tree", "pizza", "running",
// "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna",
// "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
// "beer"], true);

// log(addEntry("me", "your"))


let todoList = [];
function remember(task) {
todoList.push(task);
}
function getTask() {
return todoList.shift();
}
function rememberUrgently(task) {
todoList.unshift(task);
}

log(remember("beauty"));
log(remember("neat"));
log(remember("august"));
log(remember(6));
log(todoList)
log(getTask())
log(remember("China"));
log(remember("peter"));
log(todoList)
log(remember("Kelvin"));

log(getTask())

log(rememberUrgently("august"))
log(todoList)
log(getTask())
log(todoList)
log(rememberUrgently("China"))
log(todoList)
log(getTask())
log(todoList)


console.log([2, 1, 2, 3, 2,  2, 1].indexOf(2));
// → 1
console.log([ 2, 2, 3, 2, 1].lastIndexOf(2));
// → 3


function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));

    }

    log(remove(["a", "b", "c", "d", "e"], 2))

    log(String(6).padStart(7, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(", "));
// → Secretarybirds. specialize. in. stomping

log("0".repeat(4))