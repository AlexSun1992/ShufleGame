// export default

function Greeting(){

    let greeting = document.querySelector('.greeting');

    let btn = document.querySelector('.greeting-instructions__btn')

    window.addEventListener('load',function(){

        if(!greeting.classList.contains('appear')){

            greeting.classList.add('appear')
        }

    })

    btn.addEventListener('click',function(){

        if(greeting.classList.contains('appear')){

            greeting.classList.add('disappear')

        }

    });

}