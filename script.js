let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let mastersongname = document.getElementById('mastersongname');
let progressbar= document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitemsl = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  {songname : "Lut Gaye - Jubin",filePath: "songs/1.mp3 ",coverPath: "images/lutgaye.jpg" },
  {songname : "Harley Bird - Home",filePath: "songs/2.mp3 ",coverPath: "images/1.jpg" },
  {songname : "Ikson Any – Ikson",filePath: "songs/3.mp3 ",coverPath: "images/2.jpg" },
  {songname : "Beau Jvna - Crazy",filePath: "songs/4.mp3 ",coverPath: "images/3.jpg" },
  {songname : "Hardwind - Want Me",filePath: "songs/5.mp3 ",coverPath: "images/4.jpg" },
  {songname : "Jim - Sun Goes Down",filePath: "songs/6.mp3 ",coverPath: "images/5.jpg" },
  {songname : "Lost Sky - Vision NCS",filePath: "songs/7.mp3 ",coverPath: "images/6.jpg" },
  
]

songitemsl.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

masterplay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterplay.classList.add('fa-circle-play');
    masterplay.classList.remove('fa-circle-pause');
    gif.style.opacity=0;
  }
})

audioElement.addEventListener('timeupdate', ()=>{
  //update seekbar
  let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  progressbar.value= progress;
})

progressbar.addEventListener('change',()=>{
  audioElement.currentTime=progressbar.value*audioElement.duration/100;
})

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
      makeAllPlays();
      songindex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songindex+1}.mp3`;
      mastersongname.innerText = songs[songindex].songname;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', () => {
  if (songindex >= 6) {
      songindex = 0
  }
  else {
      songindex += 1;
  }
  audioElement.src = `songs/${songindex+1}.mp3`;
  mastersongname.innerText = songs[songindex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity=1;
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');


})

document.getElementById('previous').addEventListener('click', () => {
  if (songindex < 0) {
      songindex = 0
  }
  else {
      songindex -= 1;
  }
  audioElement.src = `songs/${songindex+1}.mp3`;
  mastersongname.innerText = songs[songindex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity=1;
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})