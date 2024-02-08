const filterForm = document.querySelector('.filter__container_form');

if (filterForm) {
  filterForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { category } = event.target;
    const id = category.value;
    if (id) {
      const res = await fetch('/api/filter', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      document.querySelector('.cardList__containter').remove();
      const centerContainer = document.querySelector('.center-container');
      centerContainer.insertAdjacentHTML('beforeend', data);
    }
  });
}
