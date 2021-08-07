import mottos from './consts/consts.js';

document.addEventListener("DOMContentLoaded", () => {
    let mottoElement = document.getElementsByClassName('motto')[0].getElementsByTagName('p')[0];
    mottoElement.innerHTML = mottos[Math.floor(Math.random() * 3)];
});

document.getElementsByClassName('more')[0].addEventListener('click', (obj) => {
    obj.target.classList.toggle('more-active');
    document.getElementById('nav').classList.toggle('nav-opened');
})

const cursor = document.getElementById('cursor');
const cursor_inner = document.getElementById('cursor_inner');
window.addEventListener('mousemove', function(e){
    setTimeout(() => {
        cursor_inner.style.left = `${e.clientX - 7 / 2}px`;
        cursor_inner.style.top = `${e.clientY - 7 / 2}px`;

        setTimeout(() => {
            cursor.style.left = `${e.clientX - 29 / 2}px`;
            cursor.style.top = `${e.clientY - 29 / 2}px`;
        }, 100);
    }, 15);
});

const uiuiui = document.getElementsByClassName('cursor-hover');

for (const iterator of uiuiui) {
    iterator.addEventListener("mouseover", () => {
        document.getElementById('cursor-container').classList.add('cursor-active');
    });

    iterator.addEventListener("mouseleave", () => {
        document.getElementById('cursor-container').classList.remove('cursor-active');
    });
}