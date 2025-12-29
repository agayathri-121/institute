document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedbackForm');
  const message = document.getElementById('feedbackMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const role = form.role.value;
    const msg = form.message.value.trim();

    if (name && email && role && msg) {
      message.style.color = '#22c55e';
      message.textContent = `Thank you, ${name}. Your feedback has been received.`;
      form.reset();
      
    } else {
      message.style.color = '#f97316';
      message.textContent = 'Please fill in all required fields.';
    }
  });
});
