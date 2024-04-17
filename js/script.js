window.addEventListener('DOMContentLoaded', () => {
    const overlayModal = document.querySelector('.overlay'),
          UpdatesModal = document.querySelector('.modal_updates'),
          modal = document.querySelectorAll('.modal'),
          buttonUpdates = document.querySelector('.btn_updates'),
          menu = document.querySelector('.menu'),
          menuElems = menu.childNodes,
          promo = document.querySelector('.promo'),
          buttonUp = document.querySelector('.btn_page-up'),
          buttonHiderModals = document.querySelector('.btn_modal-hider'),
          promptModal = document.querySelectorAll('.modal-prompt'),
          promptKey = document.querySelectorAll('.prompt-key'),
          carouselItems = document.querySelectorAll('.basics-item'),
          arrowLeft = document.querySelector('.arrow_left'),
          arrowRight = document.querySelector('.arrow_right'),
          questionItems = document.querySelectorAll('.question__item'),
          test = document.querySelectorAll('.test-wrapper'),
          testModal = document.querySelector('.modal_test'),
          testModalElems = testModal.childNodes,
          hamburger = document.querySelector('.hamburger'),
          hamburgerList = document.querySelector('.hamburger-list');

    function showModalWindow(elem) {
        overlayModal.classList.add('modal_active');
        elem.classList.add('modal_active');
    }

    function showPrompts(keyObj, elemObj) {
        keyObj.forEach((keyItem) => {
            keyItem.addEventListener('click', (event) => {
                elemObj.forEach((elemItem) => {
                    elemItem.classList.toggle('prompt_active');
                })
            })
        })
    }

    function hideAllModals() {
        overlayModal.classList.remove('modal_active');
        modal.forEach((item) => {
            item.classList.remove('modal_active');
        });
    }
    
    function makeHeaderChange() {
        if (window.scrollY > 0) {
            menu.classList.add('menu_mod');
            menuElems[7].classList.add('menu__item_mod');
            menuElems[7].textContent = 'A&E';
        } else {
            menu.classList.remove('menu_mod');
            menuElems[7].classList.remove('menu__item_mod');
            menuElems[7].textContent = 'Art&Education';
        }
    }

    function scrollUp() {
        window.scrollTo(0, 0);
    }

    function showButtonUp() {
        if (window.scrollY > 800) {
            buttonUp.classList.add('btn_page-up_active');
        } else {
            buttonUp.classList.remove('btn_page-up_active');
        }
    }

    let counter = -1;
    function showFirstCarouselItem() {
        counter = counter + 1;
        carouselItems[counter].classList.add('basics-item_active');
        arrowLeft.classList.add('arrow_inactive');
    }

    function showNextCarouselItem() {
        carouselItems.forEach((item) => {
            item.classList.remove('basics-item_active');
        })
        counter = counter + 1;
        carouselItems[counter].classList.add('basics-item_active');
    }

    function showPrevCarouselItem() {
        carouselItems[counter].classList.remove('basics-item_active');
        counter = counter - 1;
        carouselItems[counter].classList.add('basics-item_active');
    }

    function checkCounter() {
        if (counter == 5) {
            arrowRight.classList.add('arrow_inactive');
        } else {
            arrowRight.classList.remove('arrow_inactive');
        }
        if (counter == 0) {
            arrowLeft.classList.add('arrow_inactive');
        } else {
            arrowLeft.classList.remove('arrow_inactive');
        }
    }

    function showHamburgerList() {
        hamburgerList.classList.toggle('hamburger-list_active');
    }

    console.log(testModalElems);

    function refreshTest(value) {
        test.forEach((item) => {
            item.classList.remove('test-wrapper_active')
        })
        test[value].classList.add('test-wrapper_active');
    }

    function createTestModal(n) {
        testModalElems[1].textContent = testModalsInfo.modalTitle[n];
        testModalElems[3].textContent = testModalsInfo.modalText[n];
    }

    const testInfo = {
        correctAnswer: ['5', 'Композиция', '2', 'Фигура', 'Контраст', 'Полезное и интересное']
    }

    const testModalsInfo = {
        modalTitle: ['Количество основ в статье', 'Что такое композиция', 'Количество подходов в статье', 'Представление фигуры', 'Что такое контраст'],
        modalText: ['Всего в статье рассказывается о пяти основах: фигура, освещение, перспектива, композиция и цвет. Подробнее с ними можно ознакомиться в секции "Основы".', 'Композиция - это взаимное расположение предметов на рисунке, призванное отражать целостность работы и ее идею. Подробнее с композицией можно ознакомиться в секции "Основы", на четвертом слайде.', 'Всего в статье рассказывается о двух подходах: от простого к сложному, от сложного к простому. Подробнее с ними можно ознакомиться в секции "Подход".', 'Геометрическая фигура представляет собой ясное и четкое конструктивное строение. На таких фигурах проще всего уловить логику и закономерности более сложных тел. Подробнее с фигурой можно ознакомиться в секции "Основы", на первом слайде', 'Контраст - есть резкая противоположность некоторому цвету. Подробнее с контрастом можно ознакомиться в секции "Основы", на пятом слайде.']
    }



    let n = 0
    refreshTest(n)
    questionItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            if (item.textContent == testInfo.correctAnswer[n]) {
                n = n + 1
                refreshTest(n)
            } else {
                createTestModal(n);
                showModalWindow(testModal);
            }
        })
    })

    showFirstCarouselItem();
    showPrompts(promptKey, promptModal);

    hamburger.addEventListener('click', (event) => {
        showHamburgerList();
    })

    arrowRight.addEventListener('click', (event) => {
        checkCounter();
        showNextCarouselItem();
        checkCounter();
    })
    arrowLeft.addEventListener('click', (event) => {
        checkCounter();
        showPrevCarouselItem();
        checkCounter();
    })
    window.addEventListener('scroll', (event) => {
        makeHeaderChange();
        showButtonUp();
    })
    buttonUpdates.addEventListener('click', (event) => {
        showModalWindow(UpdatesModal);
    });
    buttonHiderModals.addEventListener('click', (event) => {
        hideAllModals();
    });
    overlayModal.addEventListener('click', (event) => {
        hideAllModals();
    });
    buttonUp.addEventListener('click', (event) => {
        scrollUp();
    })
  })