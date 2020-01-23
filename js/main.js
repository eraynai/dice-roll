/*
1. The user clicks a button
2. Generate a random number between 1-6
3. A text line gets printed of a random number
4. An image of the dice that corresponds to the random number is displayed on the screen
*/



//Getting access to the button

let firstButton = document.getElementById('rollBtn');

firstButton.addEventListener('click', event => {
  //Generate a random number between 1-6
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  //Change the innerHTML to tell the user what they rolled
  let result = document.getElementById('go');
result.innerHTML = `<p><strong>You have rolled ${dice}</strong></p>`;
console.log(result);
//get access to the image
let images = document.getElementById('image');
images.innerHTML = `<img src="img/dice${dice}.svg" alt="dice"></img>`;

firstButton.innerHTML = 'Roll Again';
  
})



// ******************************************************
// ********************* VARIABLES **********************
// ******************************************************




// ******************************************************
// ********************* FUNCTIONS *********************
// ******************************************************




// ******************************************************
// ****************** APPLICATION CODE ******************
// ******************************************************


