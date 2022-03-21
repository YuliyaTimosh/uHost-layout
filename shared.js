let backdrop = document.querySelector('.backdrop');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.modal .modal__action--negative');
let humburgerMenu = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');



for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        /*         modal.style.display = 'block';
                backdrop.style.display = 'block'; */
        /*   modal.className = 'open'; */
        modal.classList.add('open');
        backdrop.classList.add('open');

    });
}

if (closeButton) {
    closeButton.addEventListener('click', closeModal);
};


backdrop.addEventListener('click', function() {
    /*     mobileNav.style.display = 'none'; */
    if (mobileNav) {
        mobileNav.classList.remove('open');
    }

    closeModal();
});


function closeModal() {
    /*     modal.style.display = 'none';
        backdrop.style.display = 'none'; */
    if (modal) {
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');
}

humburgerMenu.addEventListener('click', function() {
    /*     mobileNav.style.display = 'block';
        backdrop.style.display = 'block'; */
    if (mobileNav) {
        mobileNav.classList.add('open');
    }

    backdrop.classList.add('open');

});