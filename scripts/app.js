const menuBtn = document.querySelector('.nav__mobileBtn');
const menu = document.querySelector('.nav__menu');

const toggleMenu = () => {
	menu.classList.toggle('active');
};

menuBtn.addEventListener('click', toggleMenu);
