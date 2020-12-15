const burgerButton = document.querySelector('.Header-BurgerButton');
const Header = document.querySelector('.Header')
const sticky = Header.offsetTop;



burgerButton.onclick = function () {
    if (!Header.classList.contains('Header_open')) {
        Header.classList.add('Header_open')
        if (Header.classList.contains('Header_scroll')) {
            Header.classList.remove('Header-scroll')
        }
    } else {
        Header.classList.remove('Header_open');
    }
}

document.onkeydown = function (event) {
    if (event.keyCode == 27 && Header.classList.contains('Header_open')) {
        Header.classList.remove('Header_open');
    }
}

window.onscroll = function () {
    if (window.pageYOffset > sticky && !Header.classList.contains('Header_open')) {
        Header.classList.add('Header_scroll')
    } else {
        Header.classList.remove('Header_scroll')
    }
}


const tariffButton = document.querySelector('.Tariff-Button');
const tariffPopup = document.querySelector('.TariffPopup');
const tariffButtonClose = document.querySelector('.TariffPopup-Button');

tariffButton.onclick = function () {
    if (tariffPopup.classList.contains('VisuallyHidden')) {
        tariffPopup.classList.remove('VisuallyHidden')
    }
}

tariffButtonClose.onclick = function () {
    if (!tariffPopup.classList.contains('VisuallyHidden')) {
        tariffPopup.classList.add('VisuallyHidden')
    }
}