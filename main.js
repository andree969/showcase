 const supabaseUrl = "https://eoucqyrwmwqvdafylxdf.supabase.co";
const supabaseKey = "sb_publishable_MftkeTvtO35MS9poBumgDw_JX_yY8jI";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
 const contactForm = document.querySelector('#contact-form');
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
const { error } = await supabase
  .from("messages")
  .insert([{ name, email, message }]);

  if (error) {
    msg.textContent = "Error saving message";
    msg.style.color = "red";
    return;
  }

    msg.textContent = 'Message sent successfully!';
    msg.style.color = 'green';

    contactForm.reset();
 loadMessages();

     setTimeout(() => {
      msg.textContent = '';
    }, 3000);
    });

    async function loadMessages() {

  const { data, error } = await supabase
  .from("messages")
  .select("*")
  .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading messages:", error);
    return;
  }

  userlist.innerHTML = "";

  data.forEach(entry => {

    const li = document.createElement('li');

    li.textContent = `${entry.name} : ${entry.email} : ${entry.message}`;

    userlist.appendChild(li);

  });

}
loadMessages();

    msg.textContent = 'Message sent successfully!';
    msg.style.color = 'green';

    const li = document.createElement('li');
    li.textContent = `${name} : ${email} : ${message}`;
    userlist.appendChild(li);

    contactForm.reset();

    setTimeout(() => msg.textContent = '', 3000);
  });

  
