(function () {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const headerBurger = e.target.closest('.header__burger');
        const burgerNavLink = e.target.closest('.nav__link');

        if (!headerBurger && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1200) return

        /* if (headerBurger) {
            e.preventDefault()
        } */

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    //Контент кнопка

    const contentSign = document.querySelectorAll('.content__sign');

    contentSign.forEach(contentSign => {
        const minusBtn = contentSign.querySelector('.minus');
        const plusBtn = contentSign.querySelector('.plus');
        const quantitySpan = contentSign.querySelector('.quantity');

        let quantity = 1;

        plusBtn.addEventListener('click', () => {
            quantity++;
            quantitySpan.textContent = quantity;
        });

        minusBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        });

    })

    //Кнопка текст

    const text = document.querySelectorAll('.content__text');

    text.forEach(text => {
        text.addEventListener('click', function () {
            this.classList.toggle('clicked');
        });
    });

    //Кнопка контент

    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('clicked');
        });
    });

    //Выпадающий список

    const filter = document.querySelector('.content__filter');
    const content = document.querySelector('.content__menu');
    const contentBlock = document.querySelector('.content__block');

    filter.addEventListener('click', (e) => {

        e.stopPropagation();
        content.classList.toggle('content__menu-open');
    });

    document.addEventListener('click', (event) => {

        if (!event.target.closest('.content__block')) {

            content.classList.remove('content__menu-open');
        }
    });

        // Кнопка content__product показать еще


    const btns = document.querySelector('.content__show');
    let isShowHidden = false;

    btns.addEventListener('click', () => {
    const visibleContent = document.querySelectorAll('.content__product');
    const hiddenContent = document.querySelectorAll('.content__product-hidden');

    if (!isShowHidden) {

        visibleContent.forEach(c => c.classList.add('hidden'));
        hiddenContent.forEach(c => c.classList.add('visible'));

        isShowHidden = true;
        btns.textContent = 'Показать предыдущие';
    } else {

        visibleContent.forEach(c => c.classList.remove('hidden'));
        hiddenContent.forEach(c => c.classList.remove('visible'));

        isShowHidden = false;
        btns.textContent = 'Показать ещё';
    }
});


    // Кнопка выпадающий список

    const filters = document.querySelectorAll('.content__filter');

    filters.forEach(filter => {
        filter.addEventListener('click', function () {
            this.classList.toggle('clicked');
        });
    });

    const questionsLists = document.querySelectorAll('.questions-list');

    questionsLists.forEach(list => {
        list.addEventListener('click', (e) => {
            const openedItem = list.querySelector('.questions-list__item--opened');
            const openedContent = list.querySelector('.questions-listitem--opened .questions-listcontent');

            const control = e.target.closest('.questions-list__control');
            if (!control) return;

            e.preventDefault();
            const item = control.parentElement;
            const content = control.nextElementSibling;

            if (openedItem && item !== openedItem) {
                openedItem.classList.remove('questions-list__item--opened');
                openedContent.style.maxHeight = null;
            }

            item.classList.toggle('questions-list__item--opened');

            if (item.classList.contains('questions-list__item--opened')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Слайдер-box

    const swiper = new Swiper('.content__slider', {

        spaceBetween: 15,
        slidesPerView: 1,

        navigation: {
            nextEl: '.content__next',
            prevEl: '.content__prev',
        },

        breakpoints: {
            601: {
                spaceBetween: 32,
                slidesPerView: 2,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                spaceBetween: 10,
                slidesPerView: 3,
            }
        }
    });

    // Кнопка testimonials показать еще


    const btn = document.querySelector('.testimonials__arrow');
    let isShowingHidden = false;

    btn.addEventListener('click', () => {
    const visibleComments = document.querySelectorAll('.testimonials__line');
    const hiddenComments = document.querySelectorAll('.testimonials__line-hidden');

    if (!isShowingHidden) {

        visibleComments.forEach(c => c.classList.add('hidden'));
        hiddenComments.forEach(c => c.classList.add('visible'));

        isShowingHidden = true;
        btn.textContent = 'Показать предыдущие';
    } else {

        visibleComments.forEach(c => c.classList.remove('hidden'));
        hiddenComments.forEach(c => c.classList.remove('visible'));

        isShowingHidden = false;
        btn.textContent = 'Показать ещё';
    }
});



    // Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)


})();