//Tapshiriq 1

// 1-ci metod

let text = '32, 31, 34, 36, 31';
let newText = text.replaceAll(',', ';');

console.log(newText);


//2-ci metod

let note='32,31,34,36,31';
let newNote= note.split(',');
console.log(newNote);

let new_note=newNote.join(';');
console.log(new_note);

