
// export default

function Rules() {
        let btn = document.querySelector('.navigation-menu__item-ref');

        let popup = document.querySelector('.popup-rules');

        btn.addEventListener('click', function () {

            if (!popup.classList.contains('appear') && !popup.classList.contains('disappear')) {

                popup.classList.add('appear')

            } else if (popup.classList.contains('appear') && !popup.classList.contains('disappear')) {

                popup.classList.add('disappear')

            } else if (popup.classList.contains('appear') && popup.classList.contains('disappear')) {

                popup.classList.remove('disappear')
            }
        })
    }
