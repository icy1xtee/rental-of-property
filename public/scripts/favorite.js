const cardListFav = document.querySelector('.cardList__containter');

if (cardListFav) {
  cardListFav.addEventListener('click', async (event) => {
    if (event.target.classList.contains('card-favicon__button')) {
      console.log('click');
      const card = event.target.closest('.cardList__containter-card');
      const { id } = card.dataset;
      const res = await fetch(`/api/cardFav/${id}`, {
        method: 'POST',
      });
      const data = await res.json();
      const favIcon = document.querySelector(`.card-favicon[data-id='${id}']`);
      if (data.message === 'confirm') {
        favIcon.style.fill = 'rgba(194, 50, 50, 0.718)';
      } else {
        favIcon.style.fill = 'rgba(0, 0, 0, 0.718)';
      }
    }
  });
}

// const handleFaviconClick = () => {
//   const svgElement = document.querySelector(".card-favicon");
//   svgElement.style.fill = "white";
// };
// if (cardist) {
//   cardist.addEventListener("click", async (event) => {
//     if (event.target.classList.contains("card-favicon")) {
//       handleFaviconClick();
//     }
//   });
// }
