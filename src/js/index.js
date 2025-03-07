import '../css/styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent(){
    const content = document.querySelector("#content");
    content.innerHTML = '';
}

document.querySelector("#home-btn").addEventListener('click', () => {
    clearContent();
    loadHome();
});

document.querySelector("#menu-btn").addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.querySelector("#contact-btn").addEventListener('click', () => {
    clearContent();
    loadContact();
});

clearContent();
loadHome();