const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.link')

hamburger.addEventListener('click', ()=> {
    nav.classList.toggle('visible')
})
