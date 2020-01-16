$(window).bind("load", function() {
console.log("you have succesfuly linked yay")

// seting variables that im going to use

var targetNumber =""
//setting up the random number generator
targetNumber= Math.floor(Math.random() * 100 + 10);

$("#targetNum").text(targetNumber);

var counter = 0;

var wins = 0;
var looses = 0

// Now for the hard part. Creating multiple crystals each with their own unique number value.

console.log(Math.floor(Math.random() * 100 + 10))
// We begin by expanding our array to include four options.
var numberOptions = [Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1)];

var crystalPics = [
  './assets/images/pink-gem.webp',
  "./assets/images/green emerald.jpg",
  "./assets/images/blue_crystal-removebg-preview.jpg",
  "./assets/images/smoky-quartz-mineral-crystal-crystal.jpg"
]
// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {
  console.log('looping!!', numberOptions[i], 'this i just i', i)

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-img");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", crystalPics[i]);

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-img").on("click", function() {
console.log("crystal here !!  $(this).attr('data-crystalvalue')", $(this).attr("data-crystalvalue"))
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  $("#counter1").text("New score: " + counter);

  if (counter === targetNumber) {
    wins++
    $("#wincounter").text("You win!" + wins);
    alert('YOU WIN!')
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
    
    //$('#wincounter').text('Wins: ' + wins)
  }

  else if (counter >= targetNumber) {
    looses++
    $("#losscounter").text("You lose!!" + looses);
    alert('YOU LOOSE')
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
    
    //$('#looscounter').text('Looses: ' + looses)
  }

});

});