const scriptURL = 'https://script.google.com/macros/s/AKfycbyOb2ck5s25zAgJ9uA7ngFGOkjC2MZcdbeQ7A9PefTgZ8VQ0MbGSwUcD8ssGGmhv6k1/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
