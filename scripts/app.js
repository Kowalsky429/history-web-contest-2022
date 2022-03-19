const menuBtn = document.querySelector('.nav__mobileBtn');
const menu = document.querySelector('.nav__menu');
const articles = document.querySelectorAll('.description');
const tables = document.querySelectorAll('.table');
const rows = document.querySelectorAll('.table .row');
const animateBoxes = document.querySelectorAll('.animate');
const text = document.querySelector('.text__container .text');
const author = document.querySelector('.text__container .author');
const slider = document.querySelector('.slider');
const right = document.querySelector('.bar__right');
const left = document.querySelector('.bar__left');
const circleText = [...document.querySelectorAll('.inner p')];
const tl = gsap.timeline({ defaults: { ease: 'power1out' } });

// menu toggle
const toggleMenu = () => {
	menu.classList.toggle('active');
};
menuBtn.addEventListener('click', toggleMenu);
// articles animation
articles.forEach((article) =>
	gsap.fromTo(
		article.children,
		{ y: '+=140', opacity: '0' },
		{
			y: '0',
			opacity: '1',
			ease: 'easeInOut',
			stagger: '0.2',
			duration: '1',
			scrollTrigger: { trigger: article, start: 'top 50%', end: '0%' },
		}
	)
);
tables.forEach((table) =>
	gsap.fromTo(
		table,
		{ opacity: '0' },
		{
			opacity: '1',
			ease: 'easeInOut',
			duration: '1',
			scrollTrigger: { trigger: table, start: 'top 50%', end: '0%' },
		}
	)
);
rows.forEach((row) =>
	gsap.fromTo(
		row,
		{ x: '+=100', opacity: '0' },
		{
			x: '0',
			opacity: '1',
			ease: 'easeInOut',
			stagger: '0.5',
			duration: '1',
			delay: '0.8',
			scrollTrigger: { trigger: row, start: 'top 100%', end: '0%' },
		}
	)
);
animateBoxes.forEach((box) =>
	gsap.fromTo(
		box,
		{ opacity: '0' },
		{
			opacity: '1',
			duration: '1.2',
			stagger: '0.3',
			scrollTrigger: {
				trigger: box,
				start: 'top 85%',
				end: '0%',
			},
		}
	)
);
// open start animation
tl.fromTo(right, { transform: 'scale(0)' }, { transform: 'scale(1)', duration: '.5' });
tl.fromTo(left, { transform: 'scale(0)' }, { transform: 'scale(1)', duration: '.5' });

circleText.forEach((text) => {
	tl.fromTo(text, { opacity: '0', x: '-15' }, { opacity: '1', x: '0', duration: '.6', stagger: '0.1' });
});

tl.to(slider, { opacity: '0', duration: '.6' });
