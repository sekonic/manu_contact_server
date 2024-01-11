const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let fd = new FormData(contactForm);
  data = new URLSearchParams(fd).toString();

  fetch('http://localhost:9000/post', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: data
  });

  contactForm.reset();
});