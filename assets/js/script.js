const play = document.getElementById("play");

play.addEventListener("click", () => {
  // first dice

  let randoNum1 = Math.floor(Math.random() * 6) + 1; // generates random dice number for the first dice

  let randoDiceImage = "dice" + randoNum1 + ".png"; //takes the images and the random number and puts it together choosing between dice1.png and dice6.png

  let randoImageSource = "assets/img/" + randoDiceImage; // gets the source and connects it to the random dice imageimages/dice1.png - images/dice6.png

  let dice1 = document.querySelectorAll("img")[0];

  dice1.setAttribute("src", randoImageSource);

  // second dice

  let randoNum2 = Math.floor(Math.random() * 6) + 1; // generates random dice number for the first dice

  let randoDiceImage2 = "dice" + randoNum2 + ".png"; //takes the images and the random number and puts it together choosing between dice1.png and dice6.png

  let randoImageSource2 = "assets/img/" + randoDiceImage2; // gets the source and connects it to the random dice imageimages/dice1.png - images/dice6.png

  let dice2 = document.querySelectorAll("img")[1];

  dice2.setAttribute("src", randoImageSource2);

  // who wins?

  if (randoNum1 > randoNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randoNum2 > randoNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "It's A Draw!";
  }
});
