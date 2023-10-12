const divs = document.querySelectorAll('.div');

divs.forEach(div => {
    const icon = div.querySelector('.icon');
    div.addEventListener('mouseover', () => {
        icon.classList.add('fa-bounce'); // Adiciona a classe de animação personalizada
    });

    div.addEventListener('mouseout', () => {
        icon.classList.remove('fa-bounce'); // Remove a classe de animação personalizada
    });
});





// const icons = document.querySelectorAll('.icon');
// const divs = document.querySelectorAll('.div')


// divs.forEach(icon => {
//     icon.addEventListener('mouseover', () =>{
//         icon.classList.add('fa-bounce')    
//     })
//     icon.addEventListener('pointerout', () =>{
//         icon.classList.remove('fa-bounce')    
//     })
// })





//////////////////////////////////////////////////////////////////////////
// divs.forEach(div => {
//     const icons = document.querySelectorAll('#icon');
//     div.addEventListener('mouseover', () =>{
//         icons.classList.add('fa-bounce')    
//     })
//     div.addEventListener('pointerout', () =>{
//         icons.classList.remove('fa-bounce')    
//     })
// })

// function icon (){
//     icons.forEach(icon => {
//         icon.addEventListener('mouseover', () =>{
//             icon.classList.add('fa-bounce')    
//         })
//         icon.addEventListener('pointerout', () =>{
//             icon.classList.remove('fa-bounce')    
//         })
//     })
// }