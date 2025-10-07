 const contactForm = document.querySelector('#contact-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  const msg = document.querySelector('.msg');
 userlist = document.querySelector('#userlist');
  
  const namePattern = /^[a-zA-Z\s]{2,50}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    
    if (!name || !email || !message) {
      msg.textContent = 'Please fill in all fields.';
      msg.style.color = 'red';
      return;
    }

    if (!namePattern.test(name)) {
      msg.textContent = 'Please enter a valid name (letters only, 2-50 characters).';
      msg.style.color = 'red';
      return;
    }

    if (!emailPattern.test(email)) {
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = 'red';
      return;
    }

    if (message.length < 10) {
      msg.textContent = 'Message should be at least 10 characters.';
      msg.style.color = 'red';
      return;
    }


    msg.textContent = 'Message sent successfully!';
    msg.style.color = 'green';

    
    contactForm.reset();


    setTimeout(() => {
      msg.textContent = '';
    }, 3000);
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name} : ${email} : ${message}`));
    userlist.appendChild(li);
    nameInput.value = '';  
    emailInput.value = '';
    messageInput.value = '';
  });
