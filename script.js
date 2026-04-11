let buffer = [];
const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const prefix = (typeof path !== 'undefined') ? path : "./";

window.addEventListener("keydown", e => {
    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    buffer.push(key);

    if (buffer.length > code.length) buffer.shift();
    const recent = buffer.slice(-code.length);

    if (recent.join() === code.join()) {
        location.href = prefix + "Others/terminal.html";
        buffer.length = 0;
    }
});

const headerEl = document.querySelector('header');
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const maxOpacity = 0.45;
    const maxBlur = 12;
    const pct = Math.min(y / 300, 1);
    headerEl.style.background = `rgba(0,0,0,${(pct * maxOpacity).toFixed(3)})`;
    headerEl.style.backdropFilter = `blur(${(pct * maxBlur).toFixed(2)}px)`;

    if (y > 10) headerEl.classList.add('scrolled'); else headerEl.classList.remove('scrolled');
});

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    dropbtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdowns.forEach(d => { if(d !== dropdown) d.classList.remove('show'); });
        if (window.innerWidth > 850) dropdown.classList.toggle('show');
    });

    dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 850)  dropdown.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
        const checkMouse = (ev) => {
            const rect = dropdownContent.getBoundingClientRect();
            const buffer = 30;
            
            if (ev.clientX < rect.left - buffer || 
                ev.clientX > rect.right + buffer || 
                ev.clientY < rect.top - buffer || 
                ev.clientY > rect.bottom + buffer) {
                
                dropdown.classList.remove('show');
                window.removeEventListener('mousemove', checkMouse);
            }
        };
        window.addEventListener('mousemove', checkMouse);
    });
});

window.addEventListener('scroll', () => {
    dropdowns.forEach(d => d.classList.remove('show'));
});

document.addEventListener('click', (e) => {
    dropdowns.forEach(d => {
        if (!d.contains(e.target)) d.classList.remove('show');
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.key === 'u')) {
        event.preventDefault();
    }
});