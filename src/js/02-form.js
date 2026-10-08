const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

try {
  const savedData = JSON.parse(localStorage.getItem(storageKey));
  if (savedData && typeof savedData === 'object') {
    formData.email =
      typeof savedData.email === 'string' ? savedData.email.trim() : '';
    formData.message =
      typeof savedData.message === 'string' ? savedData.message.trim() : '';
  }
} catch {
  localStorage.removeItem(storageKey);
}

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', () => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  if (!formData.email || !formData.message) {
    alert('Please fill in all fields.');
    return;
  }

  console.log({ ...formData });
  localStorage.removeItem(storageKey);
  form.reset();
  formData = { email: '', message: '' };
});
