const scriptURL = 'https://script.google.com/macros/s/AKfycbyOb2ck5s25zAgJ9uA7ngFGOkjC2MZcdbeQ7A9PefTgZ8VQ0MbGSwUcD8ssGGmhv6k1/exec'

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  let inputted = 0;

  let qs = document.querySelectorAll('.q');
  console.log(qs)

  for(let i = 0; i < qs.length; i++){
    if(qs[i].classList.contains('radio')){
      for(let j = 0; j < qs[i].children.length; j++){
        if(qs[i].children[j].checked){
          console.log(qs[i].children[j])
          inputted += 1;
          j = qs[i].children.length;
        }
      }
    } else {
      if(qs[i].value != ''){
        inputted += 1;
        console.log(qs[i])
      }
    }
  }

  if(inputted == qs.length){
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { })
    .catch(error => console.error('Error!', error.message))
  } else {
    alert('answer all questions before you submit')
  }
})
