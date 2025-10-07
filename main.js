 const contactForm = document.querySelector('#contact-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');
  const msg = document.querySelector('.msg');
 userlist = document.querySelector('#userlist');
  // Validation patterns
  const namePattern = /^[a-zA-Z\s]{2,50}$/; // Letters and spaces, 2-50 chars
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Trim input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validation
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

    // If all validations pass
    msg.textContent = 'Message sent successfully!';
    msg.style.color = 'green';

    // Optionally, reset the form
    contactForm.reset();

    // Remove message after 3 seconds
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
