// prima versione utilizzando classlist 

// const aperto = document.getElementById('open');
// const close = document.getElementById('close');

// aperto.addEventListener('click', function(){
//     document.querySelector('.hamburger-menu').classList.add('display-block');
// });

// close.addEventListener('click', function(){
//     document.querySelector('.hamburger-menu').classList.remove('display-block');
// });


// seconda versione non toccando come, come da consegna, il css 

// const aperto = document.getElementById('open');
// const close = document.getElementById('close');

// aperto.addEventListener('click', function(){
//     document.querySelector('.hamburger-menu').style.display = "block";
// });

// closed.addEventListener('click', function(){
//     document.querySelector('.hamburger-menu').style.display = "none";
// });



// in questo esempio ho utlizzato solo js senza modificare ne Html ne css 
// usando style inline 
document.querySelector('i.fas.fa-bars').addEventListener('click', function(){
    document.querySelector('.hamburger-menu').style.display = "block";
})

document.querySelector('i.fas.fa-times').addEventListener('click', function(){
    document.querySelector('.hamburger-menu').style.display = "none";
})

// in questo esempio ho utlizzato solo js senza modificare ne Html ne css 
// // usando classList

document.querySelector('i.fas.fa-bars').addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.add('active')
})

document.querySelector('i.fas.fa-times').addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove('active')
})
