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

    document.querySelector('.loadingio-spinner-chunk-2by998twmg8').classList.remove('hide')
    document.querySelector('.loadingio-spinner-chunk-2by998twmg8').style.display = 'block';
    document.querySelector('.spinnerContainer').classList.remove('hide')
    document.querySelector('.spinnerContainer').style.display = 'block';
    document.querySelector('.cover').classList.remove('hide')
    document.querySelector('.cover').style.display = 'block';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {alert("Thank you! your form is submitted successfully." )
    })
    .then(() => { window.location.reload() })
    .catch(error => console.error('Error!', error.message))
  } else {
    alert('answer all questions before you submit')
  }
})


let radios = document.getElementsByTagName("input");
let labels = document.getElementsByTagName('label');

for(let i = 0; i < radios.length; i++){
  radios[i].addEventListener('change', e => {
    for(let j = 0; j < labels.length; j++){
      if(labels[j].htmlFor == e.target.id){
        labels[j].style.textDecoration = 'underline'
        for(let k = 0; k < labels.length; k++){
          if((labels[k].htmlFor != e.target.id) && (!labels[k].control.checked)){
            labels[k].style.textDecoration = 'none'
          }
        }
      }
    }
  })
}

let is = document.querySelectorAll('.i');

for(let i = 0; i < is.length; i++){
  is[i].addEventListener('click', e => {
    let parent = is[i].parentElement;
    if(parent.lastElementChild.classList.contains('hide')){
      parent.lastElementChild.classList.remove('hide');
    } else {
      parent.lastElementChild.classList.add('hide');
    }
  })
}
