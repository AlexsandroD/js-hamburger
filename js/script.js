

const aperto = document.getElementById('open');
const close = document.getElementById('close');

aperto.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.add('display-block')
})

close.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove('display-block')
})