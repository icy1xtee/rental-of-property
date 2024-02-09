const formChange = document.querySelector('.changeProrerty');

if (formChange) {
  formChange.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      category, title, address, price, description, coordinates,
    } = event.target;
    const { id } = formChange.dataset;
    const res = await fetch(`/api/cardChange/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        category: category.value,
        title: title.value,
        address: address.value,
        price: price.value,
        description: description.value,
        coordinates: coordinates.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'confirm') {
      document.querySelector('.form__result').innerHTML = 'Изменения применены';
    } else {
      document.querySelector('.form__result').innerHTML = data.message;
    }
  });
}
