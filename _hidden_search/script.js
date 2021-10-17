const inputSearch = document.querySelector('input');
const btnSearch = document.querySelector('.btn');
const containerSearch = document.querySelector('.search')

btnSearch.addEventListener('click', () => {
    containerSearch.classList.toggle('active')
    inputSearch.focus()
})