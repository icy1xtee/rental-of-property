const addForm = document.querySelector('.addProrerty');

if (addForm) {
  addForm.addEventListener('submit', async (event) => {
    console.log('click');
    event.preventDefault();
    const {
      category, title, address, price, description, coordinates, img,
    } = event.target;
    const formData = new FormData();
    const picturesData = [...img.files];
    picturesData.forEach((url) => {
      formData.append('url', url);
    });
    formData.append('category', category.value);
    formData.append('title', title.value);
    formData.append('address', address.value);
    formData.append('price', price.value);
    formData.append('description', description.value);
    formData.append('coordinates', coordinates.value);
    const res = await fetch('/api/cardAdd', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    event.target.reset();
    if (data.message === 'confirm') {
      document.querySelector('.formadd__result').innerHTML = 'Объект добавлен';
    } else {
      document.querySelector('.formadd__result').innerHTML = data.message;
    }
  });
}
