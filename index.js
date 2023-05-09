let calcScreen = document.querySelector('p');

document.querySelector('.keypad').addEventListener('click', function() {

  if (document.querySelector('button').value != 'reset') {
    calcScreen.append(`${event.target.innerText}`);
  } 
  
  //this bubbling function doesn't disable showing up all buttons if you accidentally press the keypad background itself
  //it will just print the words del and reset when pressed as well as the other operators

});



//DEL innertext still shows up