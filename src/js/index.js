import '../css/styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

function clearContent(){
    const content = document.querySelector("#content");
    content.innerHTML = '';
}

document.querySelector('#nav-logo').addEventListener('click', () => {
    clearContent();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    loadHome();
});

document.querySelector("#home-btn").addEventListener('click', () => {
    clearContent();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    loadHome();
});

document.querySelector("#menu-btn").addEventListener('click', () => {
    clearContent();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    loadMenu();
});

document.querySelector("#contact-btn").addEventListener('click', () => {
    clearContent();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    loadAbout();
});

clearContent();
loadHome();