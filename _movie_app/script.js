//https://www.themoviedb.org/verify-email/6173d7331d01910091ade4de
// ee8c92eebffe3444d541e79cd7640440
// https://api.themoviedb.org/3/movie?api_key=ee8c92eebffe3444d541e79cd7640440

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZThjOTJlZWJmZmUzNDQ0ZDU0MWU3OWNkNzY0MDQ0MCIsInN1YiI6IjYxNzNkNzMzMWQwMTkxMDA5MWFkZTRkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o_g1qmU4FT-GJjuIift6kdi68CpuwwtYuWQJb18Yhvc

let page = 1

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ee8c92eebffe3444d541e79cd7640440`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=ee8c92eebffe3444d541e79cd7640440&query='
// const API_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=ee8c92eebffe3444d541e79cd7640440`

const main = document.getElementById('main')
const form = document.getElementById('form');
const search = document.getElementById('search');
https://api.themoviedb.org/3/movie/343611?api_key={api_key}


//Get initial Movies
getMovies(`${API_URL}&page=${page}`)

async function getMovies (url) {
    const res = await fetch(url)
    const data  = await res.json()
    //console.log(data)
   showMovies(data.results)
}
//getMovies('https://api.themoviedb.org/3/movie/580489?api_key=ee8c92eebffe3444d541e79cd7640440&language=en-US')
function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const {title, overview, vote_average, poster_path, id} = movie
        
        const movieEl = document.createElement('div')
        movieEl.id = id
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <a href="" Onclick="getMoviez(${id})" target="https://api.themoviedb.org/3/movie/${id}?api_key=ee8c92eebffe3444d541e79cd7640440">Details</a>
            </div>`
            
            
        main.appendChild(movieEl)
    })
    function getClassByRate (vote) {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
    }
    
}
//// <MOvies Details
function getMoviez (value){
    
    console.log(value)
}
function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const {title, overview, vote_average, poster_path, id} = movie
        
        const movieEl = document.createElement('div')
        movieEl.id = id
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <a Onclick="getMoviez(${id})" target="https://api.themoviedb.org/3/movie/${id}?api_key=ee8c92eebffe3444d541e79cd7640440">Details</a>
            </div>`
            
            
        main.appendChild(movieEl)
    })
    function getClassByRate (vote) {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
    }
    
}

////
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value;
    if (searchTerm && searchTerm != ''){
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
    
})

///Previous && Next 

const next = document.getElementById("next");
const previous = document.getElementById("previous");

next.addEventListener('click', () => {
    page ++;
    getMovies(`${API_URL}&page=${page}`)  
    previous.disabled = false ;
})

previous.addEventListener('click', () => {
    page --
    if(page == 1) {
        getMovies(`${API_URL}&page=${page}`) 
        previous.disabled = true 
    } else {
    getMovies(`${API_URL}&page=${page}`)
    }
})
