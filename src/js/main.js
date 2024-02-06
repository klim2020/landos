import '@/scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

import '@/js/images';

import '@/js/vue3.js';
import intlTelInput from 'intl-tel-input';

//Sidebar block



//$('#sidebar').toggleClass('active');
//Scrolldown

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
})





const input = document.querySelector("#phone");
intlTelInput(input, {
    utilsScript: "path/to/utils.js"
});