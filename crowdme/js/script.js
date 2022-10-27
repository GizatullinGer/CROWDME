function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();;
//var slideInterval = setInterval(plusSlide, 10000);//*интервал переключения слайдов

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
	showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
	showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("item");
	//var dots = document.getElementsByClassName("//имя_класса(Точки, если они есть)");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// for (i = 0; i < dots.length; i++) {
	// 	dots[i].className = dots[i].className.replace(" active", "");
	// }
	slides[slideIndex - 1].style.display = "block";
	//dots[slideIndex - 1].className += " active";
};


const iconMenu = document.querySelector('.menu-header__icon');
const menuBody = document.querySelector('.menu-header__body');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};
// var tabInterval = setInterval(nextTab, 1000);
/* Индекс вкладки по умолчанию */
var tabsIndex = 1;
showTabs(tabsIndex);

/* Функция увеличивает индекс на 1, показывает следующую вкладку*/
function nextTab() {
	showTabs(tabsIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function prevTab() {
	showTabs(tabsIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentTab(m) {
	showTabs(tabsIndex = m);
}

/* Основная функция слайдера */
function showTabs(m) {
	var j;
	var tabs = document.getElementsByClassName("tabs-work__tab");
	var points = document.getElementsByClassName("tabs-work__number");
	var line = document.getElementsByClassName("tabs-work__line");
	if (m > tabs.length) {
		tabsIndex = 1
	}
	if (m < 1) {
		tabsIndex = tabs.length
	}
	for (j = 0; j < tabs.length; j++) {
		tabs[j].style.display = "none";
	}
	for (j = 0; j < points.length; j++) {
		points[j].className = points[j].className.replace(" active", "");
	}
	for (j = 0; j < line.length; j++) {
		line[j].className = line[j].className.replace(" active", "");
	}
	tabs[tabsIndex - 1].style.display = "block";
	points[tabsIndex - 1].className += " active";
	line[tabsIndex - 1].className += " active";
};

const menuLinks = document.querySelectorAll('.menu-header__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}