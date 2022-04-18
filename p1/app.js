const seeMonkey = document.querySelector('.closed')
const hearMonkey = document.querySelector('.open')

// Add event listeners 

seeMonkey.addEventListener('click', () => {
    if (hearMonkey.classList.contains('open')) {
        hearMonkey.classList.add('active');
        seeMonkey.classList.remove('active')
    }


})

hearMonkey.addEventListener('click', () => {
    if (seeMonkey.classList.contains('closed')) {
        seeMonkey.classList.add('active');
        hearMonkey.classList.remove('active')
    }
})
