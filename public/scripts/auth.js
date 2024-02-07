const regForm = document.querySelector('.registration__form');
const loginForm = document.querySelector('.login__form');

if (regForm) {
  regForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      name, email, password, confirmPassword,
    } = event.target;
    if (password.value === confirmPassword.value) {
      const res = await fetch('/api/auth/registration', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
      });
      const data = await res.json();
      if (data.message === 'ok') {
        window.location.assign('/');
      } else {
        const regError = document.querySelector('.registration_error');
        regError.innerHTML = data.message;
      }
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/');
    } else {
      const loginError = document.querySelector('.login_error');
      loginError.innerHTML = data.message;
    }
  });
}
