// export default

(function Start(){

    let startBtn = document.querySelector('.navigation-menu__item-ref--start');

    let playGround = document.querySelector('.playground');

    let finishBtn = document.querySelector('.navigation-menu__item-ref--finish')

    startBtn.addEventListener('click',function(){

       if(!playGround.classList.contains('game-start')){

           playGround.classList.add('game-start');

       }

    });
    //
    // finishBtn.addEventListener('click',function(){
    //
    //     if(playGround.classList.contains('game-start')){
    //
    //         playGround.classList.remove('game-start');
    //
    //     }
    // });
}());