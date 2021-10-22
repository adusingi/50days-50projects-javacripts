const textearea = document.getElementsByTagName('textarea');
const tags = document.getElementById('tags')
const spans = document.getElementsByTagName('span')


// textarea.focus()


// textarea.addEventListener('keyup', (event)=> {
    
//     createTags(event.target.value)
//     if(event.code == 'Enter' && spans.length !== 0) {
//         setTimeout(() => {
//             event.target.value = '';
//         } , 10)
//       randomChoice()
//     }
// })
// const createTags = (input) => {
//     const tagEls = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
//     // tags.innerHTML = '';
//     tags.innerHTML = '';
//     tagEls.forEach(tag => {
//         const tagEl = document.createElement('span');
//         tagEl.classList.add('tag');
//         tagEl.innerText = tag
//         tags.appendChild(tagEl)
//     })
// }

// function randomChoice() {
//     const times = 30
//     let allTags = document.querySelectorAll('.tag')
    
    
//     let intervalID = setInterval (() => {
//         removeHighlight()
//         allTags[Math.floor(Math.random() * allTags.length)].classList.add('highlight')
//     }, 100)

//     setTimeout(() => {
//         clearInterval(intervalID)

//         removeHighlight()
        
//         let randomnumber = Math.round(getRandomArbitrary(0,spans.length))           
//         spans[randomnumber].classList.add('highlight')
//     }, times * 30) 


// }
// function removeHighlight(){
//     Array.from(spans).forEach(span => {
//         span.classList.remove('highlight')
//     })
// }
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

/// By 先生

const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter' && spans.length !== 0) {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        if (randomTag !== undefined)
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);

    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
    
            highlightTag(randomTag)
        }, 100);
    }, times * 100);

}



function pickRandomTag() {
    const allTags = document.querySelectorAll('.tag')
   return allTags[Math.floor(Math.random() * allTags.length )]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}