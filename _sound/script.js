const btn = document.querySelector('.btn')
const song = document.getElementById('applause')

// function handerPlayAudio() {
//         if(song.currentTime === 0){
//           song.play()
//         } else if(song.currentTime !== 0)  
//           song.pause() 
//           song.currentTime = 0; 
// }      

const handerPlayAudio = () => {
  song.currentTime === 0 ? song.play() : song.pause()
  song.currentTime=0
}
btn.addEventListener('click', handerPlayAudio); 