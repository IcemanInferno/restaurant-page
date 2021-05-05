import {pageLoader} from './pageLoader.js';
import {buildContactPage} from './contactPage.js';
import {buildMenuPage} from './menuPage.js';


pageLoader();

const contactBtn = document.getElementById('contact-button');
contactBtn.addEventListener("click", buildContactPage);

const menuBtn = document.getElementById('menu-button');
menuBtn.addEventListener("click", buildMenuPage);



