const cardist = document.querySelector(".cardList__container");

if (cardList) {
  cardList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('card-favicon')) {
      const card = event.target.closest('.cardList__containter-card');
      const { id } = card.dataset;

      const res = await fetch(`/api/cardFav/${id}`, {
        method: 'POST',
      });

      const data = await res.json();
      if (data.message === 'confirm') {
        event.target.closest('.cardList__containter-card').remove();
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
