let songindex = 0;
let audioElement = new Audio('songs/lutgaye.mp3');
let masterplay= document.getElementById('masterplay');
let progressbar= document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitemsl = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  {songname : "Harley Bird - Home",filePath: "songs/music-1.mp3 ",coverPath: "images/music-1.jpg" },
  {songname : "Ikson Anywhere – Ikson",filePath: "songs/music-2.mp3 ",coverPath: "images/music-2.jpg" },
  {songname : "Beauz & Jvna - Crazy",filePath: "songs/music-3.mp3 ",coverPath: "images/music-3.jpg" },
  {songname : "Hardwind - Want Me",filePath: "songs/music-4.mp3 ",coverPath: "images/music-4.jpg" },
  {songname : "Jim - Sun Goes Down",filePath: "songs/music-5.mp3 ",coverPath: "images/music-5.jpg" },
  {songname : "Lost Sky - Vision NCS",filePath: "songs/music-6.mp3 ",coverPath: "images/music-6.jpg" },
  {songname : "Lut Gaye -  Jubin Nautiyal and Manoj Muntashir",filePath: "songs/lutgaye.mps ",coverPath: "images/lutgaye.jpg" },
  
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