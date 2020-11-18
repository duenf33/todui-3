const readline = require('readline');
const data = require('./data.js');


const todos = data.todos;

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;
const easyLoop = () => {
  for(let i = 0; i < todos.length; i++){
  const todoList = todos[i].text;
  const ol = i + 1 + '. ';
  console.log(ol + todoList)
  }
}

const add = function(userInput) {
  const todo = {
    text: userInput,
    isComplete: false,
    priority: 2,
  }

  todos.unshift(todo);
  console.clear();
  console.log('Your todos are:\n')

  easyLoop();
  displayMenu();
  // interface.question(menu, handleMenu);
}

const handleMenu = function(cmd) {
  if (cmd === '1') {
    console.clear();
    interface.question('What todo would you like to add?\n\n', add);
  } else if (cmd === '2') {
    console.clear();
    easyLoop();
    interface.question("Which todo do you want to remove?", handleMenu);
  } else if (cmd === '3') {
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
  } else if (cmd === '4') {
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
  } else if (cmd === '5') {
    console.clear();
    console.log(`Feature ${cmd} is still under construction. Sorry!`);
    interface.question(menu, handleMenu);
  } else {
    console.log('Quitting!');
    interface.close();
  }
};

console.clear();
console.log('Your todos are:')
for (const todo of todos) {
  console.log('* ' + todo.text);
}

const displayMenu = () => {
interface.question(menu, handleMenu);
}
displayMenu();
