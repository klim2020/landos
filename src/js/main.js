import '@/scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

import '@/js/images';

import '@/js/vue3.js';

//Sidebar block



//$('#sidebar').toggleClass('active');


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