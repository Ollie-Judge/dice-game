// first dice

let randoNum1 = Math.floor(Math.random() * 6) + 1; // generates random dice number for the first dice

console.log(randoNum1);

let randoDiceImage = "dice" + randoNum1 + ".png"; //takes the images and the random number and puts it together choosing between dice1.png and dice6.png

console.log(randoDiceImage);

let randoImageSource = "assets/img/" + randoDiceImage; // gets the source and connects it to the random dice imageimages/dice1.png - images/dice6.png

console.log(randoImageSource);

let dice1 = document.querySelectorAll("img")[0];

console.log(dice1);

dice1.setAttribute("src", randoImageSource);

// second dice

let randoNum2 = Math.floor(Math.random() * 6) + 1; // generates random dice number for the first dice

console.log(randoNum2);

let randoDiceImage2 = "dice" + randoNum2 + ".png"; //takes the images and the random number and puts it together choosing between dice1.png and dice6.png

console.log(randoDiceImage2);

let randoImageSource2 = "assets/img/" + randoDiceImage2; // gets the source and connects it to the random dice imageimages/dice1.png - images/dice6.png

console.log(randoImageSource2);

let dice2 = document.querySelectorAll("img")[1];

console.log(dice2);

dice2.setAttribute("src", randoImageSource2);
