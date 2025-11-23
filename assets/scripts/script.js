const burgerIcon = document.querySelector(".burguer");
const cancelIcon = document.querySelector(".cancel");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

burgerIcon.addEventListener('click', function() {
    burgerIcon.style.display = 'none';
    cancelIcon.style.display = 'block';

    main.style.filter = 'blur(1px)';
    footer.style.filter = 'blur(1px)';

    nav.style.opacity = '1';
    nav.style.pointerEvents = 'visible';
});

cancelIcon.addEventListener('click', function() {
    burgerIcon.style.display = 'block';
    cancelIcon.style.display = 'none';

    main.style.filter = 'blur(0px)';
    footer.style.filter = 'blur(0px)';

    nav.style.opacity = '0';
    nav.style.pointerEvents = 'none';
});

main.addEventListener('click', function() {
    burgerIcon.style.display = 'block';
    cancelIcon.style.display = 'none';

    main.style.filter = 'blur(0px)';
    footer.style.filter = 'blur(0px)';

    nav.style.opacity = '0';
    nav.style.pointerEvents = 'none';
});

footer.addEventListener('click', function() {
    burgerIcon.style.display = 'block';
    cancelIcon.style.display = 'none';

    main.style.filter = 'blur(0px)';
    footer.style.filter = 'blur(0px)';

    nav.style.opacity = '0';
    nav.style.pointerEvents = 'none';
});