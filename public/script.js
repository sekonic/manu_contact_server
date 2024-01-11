const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let fd = new FormData(contactForm);
  data = new URLSearchParams(fd).toString();

  fetch('https://manu-contact.glitch.me/post', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: data
  });

  contactForm.reset();
});