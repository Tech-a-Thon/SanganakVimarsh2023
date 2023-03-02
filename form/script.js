const formBtn = document.querySelector('#submit-btn');
const addButton = document.querySelectorAll('.add-btn');
console.log('fjewb')
const hidden = Array.from(document.querySelectorAll('fieldset:nth-child(-n+5):nth-child(n+2)'));
console.log('hidden', hidden);

let playerCounter = 0
let hiddenFieldsetCounter = 0;

// console.log(form)
// form.addEventListener('submit', (e) => {
//     console.log('submit')
//     e.preventDefault();
//     // console.log('submitted');
//     // playerCounter++;
//     // console.log(hidden[hiddenFieldsetCounter]);
//     // hidden[hiddenFieldsetCounter].style.display = 'block';
// });

formBtn.addEventListener('click', (e) => {
    console.log('clicked')
    // e.preventDefault();
    // playerCounter++;
    // console.log(hidden[hiddenFieldsetCounter]);
    // hidden[hiddenFieldsetCounter].style.display = 'block';
    // hiddenFieldsetCounter++;
});