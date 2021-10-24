const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'
    const updateIncre = () => {
        const target = counter.getAttribute('data-target')
    
        let c = +counter.innerText
        const increment = target / 200;
        
        if (c < target){
            counter.innerText = c + increment
            setTimeout(updateIncre, 1);
        } else {
            counter.innerText = target
        }
    
    }
      updateIncre()
})


////------------
// counters.forEach(counter => {
    
//     const updateIncre = () => {
//         const target = counter.getAttribute('data-target')
    
//         let c = 0
//         const increment = target / 200
        
//         let interval = setInterval(incrementTarget, 1);
        
//         function incrementTarget(){
//             counter.innerText = c
//             c += increment;
//             if (c > target) {
//                 clearInterval(interval)
//                 counter.innerText = target
//             }
//         }
        
//     }
//       updateIncre()
// })

//@@@@@@@@@@@

// const counters = document.querySelectorAll('.counter')

// counters.forEach(counter => {
//     counter.innerText = '0'

//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target')
//         const c = +counter.innerText

//         const increment = target / 200

//         if(c < target) {
//             counter.innerText = `${Math.ceil(c + increment)}`
//             setTimeout(updateCounter, 1)
//         } else {
//             counter.innerText = target
//         }
//     }

//     updateCounter()
// })