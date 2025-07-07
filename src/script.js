const button = document.querySelector('button')
const p = document.querySelector('p')

button.addEventListener('click', e => {
    p.classList.toggle("more")
    if(button.textContent == "Show more") {
        button.textContent = "Hide details"
    }
    else {
        button.textContent = "Show more"
    }
})