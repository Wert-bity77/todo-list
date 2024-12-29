let form = document.querySelector('.form'); 
let input = document.querySelector('.input');
let ul = document.querySelector('.ul');
let nightModeBtn = document.querySelector('.btn-night');
let body = document.body;


form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    let inputValue = input.value.trim(); 
    if (inputValue === '') {
        alert('Iltimos task kiriting');
        return;
    }     
    let li = document.createElement('li');
    li.textContent = inputValue;
      
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
         
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    input.value = ''; 
});


nightModeBtn.addEventListener('click', function () {
    body.classList.toggle('dark');
  

});
darkModenbtn.addEventListener('click', function ()  {
    body.style.backgroundPosition('leftm')
}

) 
