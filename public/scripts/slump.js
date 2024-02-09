const slumpCard = document.querySelector(".center-container");

if (slumpCard) {
  slumpCard.addEventListener("click", async (e) => {
    const { id } = e.target;
    if (e.target.classList.contains("card-button")) {
      window.location.assign(`/card/${id}`);
    }
  });
}
