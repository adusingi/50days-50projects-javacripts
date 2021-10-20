const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', getJoke)

//USING ASYNC and WAIT
// async function getJoke() {
//     const config = {
//         headers : {
//             'Accept' : 'application/json',
//           }, 
//     }
//     const result = await fetch('https://icanhazdadjoke.com/', config)
//     const data  = await result.json()
    
//     joke.innerHTML = data.joke
// }

// USING THEN ()
function getJoke() {
    const config = {
        headers : {
            'Accept' : 'application/json',
          }, 
    }
    fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())
    .then(data => {
        joke.innerHTML = data.joke
    })
}