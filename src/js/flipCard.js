
//Flip Card
export const flipCard = () => {
  let cards = [...document.querySelectorAll(".cardFlip")];
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (card.classList.contains('active')) {
        card.classList.remove('active');
        console.log(`show front card ${i + 1}`);
      } else {
        cards[i].classList.add('active');
        console.log(`show back card ${i + 1}`);
      }
    });
    console.log(`add eventlistener flip on card ${i + 1}`);
  });
};

//Flip Main Card
export const flipMainCard = () => {
  let card = document.querySelector(".mainCard");
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      console.log("show front main card");
    } else {
      card.classList.add('active');
      console.log("show back main card");
    }
  });
  console.log("add eventlistener flip on main card");
};