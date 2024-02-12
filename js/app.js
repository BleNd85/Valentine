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
  const sadImageArray = ["https://i.pinimg.com/originals/e1/a8/1c/e1a81cdae0eab198bc4cdab25afa0222.gif",
    "https://i.pinimg.com/originals/59/43/b3/5943b31ab9e62fef737b34251130251d.gif",
    "https://media.tenor.com/BO1QNXaKiZ0AAAAM/dog-crying-meme.gif",
    "https://i.pinimg.com/originals/e4/8b/19/e48b194083622deba99454f55cf1a781.gif",
    "https://i.makeagif.com/media/3-28-2022/UDwtxx.gif",
    "https://gifdb.com/images/high/sad-pikachu-tears-mz567cufi33ij9bg.gif",
    "https://media.tenor.com/d26kkRj_FvQAAAAd/angry-cat.gif",
    "https://gifdb.com/images/high/angry-dogs-with-knives-pictures-05oss1vjdzailqg5.gif"];
  const happyImageArray = ["/img/happy/48c9522aaa31a27582216bec737e92ce.gif",
    "https://i.pinimg.com/originals/96/cd/7e/96cd7e329caf7040d9f6ddfea710ebcd.gif",
    "https://gifsec.com/wp-content/uploads/2021/04/happy-dog-gif-2.gif",
    "https://i.pinimg.com/originals/ca/08/db/ca08dbeee8a7605d1ddc41fb2517193e.gif",
    "https://media1.tenor.com/m/_NMzaxfKAJYAAAAC/excited-dog.gif",
    "https://i.pinimg.com/originals/fd/33/af/fd33af16bfe1611fc03678b9a801a88e.gif",
    "https://gifsec.com/wp-content/uploads/2021/04/happy-dog-gif-1.gif",
    "https://www.icegif.com/wp-content/uploads/2023/06/icegif-949.gif"];

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


