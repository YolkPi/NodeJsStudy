//alert('client side js file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const resIcon = document.querySelector('#resIcon');
const resTem = document.querySelector('#resTem');
const resDes = document.querySelector('#resDes');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('testing');

    // alert(search.value);

    fetch('/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log(data.error); 
            }
            else{
                resIcon.setAttribute('src', data.icon);
                resDes.textContent = data.description;
                resTem.textContent = 'Current temperature is: ' + data.temperature + '℃';

                //alert(data.icon);
                // alert(data.temperature);
                // alert(data.location);
                // alert(data.description);
            }
        });
    });
})