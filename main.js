document.addEventListener("DOMContentLoaded", function () {

  // CONTACT FORM
  const contactForm = document.querySelector('#contact-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#contactMessage');
  const msg = document.querySelector('.msg');
  const userlist = document.querySelector('#userlist');

  const namePattern = /^[a-zA-Z\s]{2,50}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      msg.textContent = 'Please fill in all fields.';
      msg.style.color = 'red';
      return;
    }

    msg.textContent = 'Message sent successfully!';
    msg.style.color = 'green';

    const li = document.createElement('li');
    li.textContent = `${name} : ${email} : ${message}`;
    userlist.appendChild(li);

    contactForm.reset();

    setTimeout(() => msg.textContent = '', 3000);
  });

  
