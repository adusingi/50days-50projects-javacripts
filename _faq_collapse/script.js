const toggles = document.querySelectorAll('.faq-toggle')
const faqs = document.querySelectorAll('.faq')
console.log(faqs)


toggles.forEach( toggle => toggle.addEventListener('click', () => {

    if(toggle.parentNode.classList.contains('active')) {
        removeActive()
    } else {
        removeActive()
        toggle.parentNode.classList.toggle('active')
    }
     }) 
)

function removeActive() {
    faqs.forEach(faq => {
        if(faq.classList.contains('active')) {
            faq.classList.remove('active')
        }
    })
}