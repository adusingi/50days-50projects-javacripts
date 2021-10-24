let allCups = document.querySelectorAll('.cup-small');
const remained = document.getElementById('remained')
const liters = document.getElementById('liters')
console.log(allCups[4])
const smallCups = [...allCups]
//console.log(smallCups)

smallCups.forEach((smallcup,index) => smallcup.addEventListener('click', () => {
    //console.log(smallCups, index)
    let full = 0
    smallcup.classList.toggle('full')
        if(smallcup.classList.contains('full')){
            for (let i=0; i < smallCups.length; i++) {
                if (i<=index) {
                    smallCups[i].classList.add('full')
                    full = index + 1
                }else {
                    smallCups[i].classList.remove('full')
                } 
            }

        updateBigCup(full)

        } else if (smallcup.classList.contains('full') !== true){
            for (let i= index; i < smallCups.length; i++) {
                smallCups[i].classList.remove('full')
                full = index
            }
        
        updateBigCup(full)

        } 
    })
)   
function updateBigCup(value) {
    console.log(value)
    const percentage = document.getElementById('percentage');
    if (value == 0){
        percentage.style.height = 0
        percentage.innerText = ''
        remained.style.visibility = 'visible'
        liters.innerText = `${2-0.250 * value}L`
    }else if (value < 8) {
        percentage.style.height= `${(330/8)*(value)}px`
        remained.style.visibility = 'visible'
        percentage.textContent = `${(250/2000)*(value)*100}%`
        liters.innerText = `${2-0.250 * value}L`
    } else if (value == 8){
        percentage.style.height= `${330}px`
        percentage.innerText = `${(250/2000)*(value)*100}%`
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
    
}


// const smallCups = document.querySelectorAll('.cup-small')
// const liters = document.getElementById('liters')
// const percentage = document.getElementById('percentage')
// const remained = document.getElementById('remained')

// updateBigCup()

// smallCups.forEach((cup, idx) => {
//     cup.addEventListener('click', () => highlightCups(idx))
// })

// function highlightCups(idx) {
//     if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
//     else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
//         idx--
//     }

//     smallCups.forEach((cup, idx2) => {
//         if(idx2 <= idx) {
//             cup.classList.add('full')
//         } else {
//             cup.classList.remove('full')
//         }
//     })

//     updateBigCup()
// }

// function updateBigCup() {
//     const fullCups = document.querySelectorAll('.cup-small.full').length
//     const totalCups = smallCups.length

//     if(fullCups === 0) {
//         percentage.style.visibility = 'hidden'
//         percentage.style.height = 0
//     } else {
//         percentage.style.visibility = 'visible'
//         percentage.style.height = `${fullCups / totalCups * 330}px`
//         percentage.innerText = `${fullCups / totalCups * 100}%`
//     }

//     if(fullCups === totalCups) {
//         remained.style.visibility = 'hidden'
//         remained.style.height = 0
//     } else {
//         remained.style.visibility = 'visible'
//         liters.innerText = `${2 - (250 * fullCups / 1000)}L`
//     }
// }