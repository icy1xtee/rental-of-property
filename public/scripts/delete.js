const cardList = document.querySelector('.center-container');

if (cardList) {
  cardList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('admin-button-delete')) {
      const card = event.target.closest('.cardList__containter-card');
      const { id } = card.dataset;
      const res = await fetch(`/api/cardDelete/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.message === 'confirm') {
        event.target.closest('.cardList__containter-card').remove();
      }
    }
  });
}
