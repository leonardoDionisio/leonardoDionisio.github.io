import mottos from './consts/consts.js';

// Motto
document.addEventListener("DOMContentLoaded", () => {
    let mottoElement = document.getElementsByClassName('motto')[0].getElementsByTagName('p')[0];
    console.log(mottos);
    mottoElement.innerHTML = mottos[Math.floor(Math.random() * 5)];
});

// Menu Open
document.getElementsByClassName('more')[0].addEventListener('click', (obj) => {
    document.getElementById('main').classList.toggle('menu-opened');
})

// Cursor config
const cursor = document.getElementById('cursor');
const cursor_inner = document.getElementById('cursor_inner');
const ww = window.innerWidth;
const wh = window.innerHeight;

window.addEventListener('mousemove', function(e){

    if (e.clientX >= (ww - 29) || e.clientY >= (wh - 29)) return;

    setTimeout(() => {
        cursor_inner.style.left = `${e.clientX - 7 / 2}px`;
        cursor_inner.style.top = `${e.clientY - 7 / 2}px`;

        setTimeout(() => {
            cursor.style.left = `${e.clientX - 29 / 2}px`;
            cursor.style.top = `${e.clientY - 29 / 2}px`;
        }, 100);
    }, 15);
});

const cursorHover = document.getElementsByClassName('cursor-hover');
for (const iterator of cursorHover) {
    iterator.addEventListener("mouseover", () => {
        document.getElementById('cursor-container').classList.add('cursor-active');
    });

    iterator.addEventListener("mouseleave", () => {
        document.getElementById('cursor-container').classList.remove('cursor-active');
    });
}