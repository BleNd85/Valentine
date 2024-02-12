document.addEventListener('DOMContentLoaded', function () {
  const wordsArray = ["Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;("];
  const sadImageArray = ["/img/sad/9vkZWA.gif", "/img/sad/angry-dog-triggered-shaking-meme-snarling-l2jq2zuwfhhaqtx7.gif",
    "/img/sad/angry-kitten-angry-kitty.gif", "/img/sad/b1308fea1c79cfd21276711ecc1a588b.gif", "/img/sad/d9df9239a488ae9f2f5efd5f0b56af5e.gif",
    "/img/sad/pikachu-crying.gif", "/img/sad/sad-cat-big-tears.gif", "/img/sad/yzg7_f.gif"];
  const happyImageArray = ["/img/happy/48c9522aaa31a27582216bec737e92ce.gif", "/img/happy/96cd7e329caf7040d9f6ddfea710ebcd.gif",
    "/img/happy/200w.gif", "/img/happy/ca08dbeee8a7605d1ddc41fb2517193e.gif", "/img/happy/excited-dog.gif", "/img/happy/fd33af16bfe1611fc03678b9a801a88e.gif",
    "/img/happy/happy-dog-gif-1.gif", "/img/happy/icegif-949.gif"];

  const yesButton = document.getElementById("yesButton")
  const noButton = document.getElementById('noButton');
  const displayText = document.getElementById('displayText');
  const displayImage = document.getElementById('randomGif')
  let shrinkCount = 0;
  noButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    const randomSadImageItem = Math.floor(Math.random() * sadImageArray.length);

    displayText.textContent = wordsArray[randomIndex];
    displayImage.src = sadImageArray[randomSadImageItem];
    displayImage.style.display = 'block';

    noButton.classList.add('shrink');
    yesButton.classList.add('enlarge');
    shrinkCount++;
    noButton.style.transform = `scale(${1 - shrinkCount * 0.1})`;
    yesButton.style.transform = `scale(${1 + shrinkCount * 0.1})`;
  });
  yesButton.addEventListener('click', function () {
    const randomHappyImageItem = Math.floor(Math.random() * happyImageArray.length);

    displayText.textContent = 'YAY!!! I LOVE YOU SWEETIE<3'
    displayImage.src = happyImageArray[randomHappyImageItem];
    displayImage.style.display = 'block';
    noButton.style.transform = `scale(${0})`;

  });
});


