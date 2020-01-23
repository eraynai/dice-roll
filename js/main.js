/*
1. The user clicks a button
2. Generate a random number between 1-6
3. A text line gets printed of a random number
4. An image of the dice that corresponds to the random number is displayed on the screen
*/





//print out what you have


//Getting access to the button

let firstButton = document.getElementById('rollBtn');

firstButton.addEventListener('click', event => {
  //Generate a random number between 1-6
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  //Change the innerHTML to tell the user what they rolled
  let result = document.getElementById('go');
result.innerHTML = `<h1><strong>You have rolled ${dice}</strong></h1>`;
console.log(result);

let images = document.getElementById('image');
images.innerHTML = `<img src="img/dice${dice}.svg" alt="dice"></img>`;
  
})

//get access to the image

let images = document.getElementById('image');
images.innerHTML = `<img src="img/dice${dice}.svg" alt="dice"></img>`;

// ******************************************************
// ********************* VARIABLES **********************
// ******************************************************




// ******************************************************
// ********************* FUNCTIONS *********************
// ******************************************************




// ******************************************************
// ****************** APPLICATION CODE ******************
// ******************************************************


