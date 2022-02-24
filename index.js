let counterHolder = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let counter = 0;

const increment = () => {
  counter = counter + 1;
  counterHolder.innerHTML = counter;
};


const save = () =>{
    let previousSave = ` ${counter} - `;
    saveEl.innerText = saveEl.innerText + previousSave;
    console.log(previousSave)
}


// let name = "John";
// let greetings = "Hi, my name is"

// let Mygreetings = `${greetings} ${name} ! we have logged in`

// console.log(Mygreetings)