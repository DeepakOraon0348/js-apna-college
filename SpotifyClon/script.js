console.log("Hello Deepak");

//Initialize the variables
let songIndex=0;
let audioElement = new Audio('./covers/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songsItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Salam-e-Ishq", filePath: "./covers/songs/1.mp3", coverPath:"./covers/covers/1.jpg"},
    {songName: "Salam-e-A", filePath: "./covers/songs/2.mp3", coverPath:"./covers/covers/2.jpg"},
    {songName: "Salam-e-B", filePath: "./covers/songs/3.mp3", coverPath:"./covers/covers/3.jpg"},
    {songName: "Salam-e-C", filePath: "./covers/songs/4.mp3", coverPath:"./covers/covers/4.jpg"},
    {songName: "Salam-e-D", filePath: "./covers/songs/5.mp3", coverPath:"./covers/covers/5.jpg"},
    {songName: "Salam-e-E", filePath: "./covers/songs/6.mp3", coverPath:"./covers/covers/6.jpg"},
    {songName: "Salam-e-F", filePath: "./covers/songs/7.mp3", coverPath:"./covers/covers/7.jpg"},
    {songName: "Salam-e-G", filePath: "./covers/songs/8.mp3", coverPath:"./covers/covers/8.jpg"},
    {songName: "Salam-e-H", filePath: "./covers/songs/9.mp3", coverPath:"./covers/covers/9.jpg"},
    {songName: "Salam-e-I", filePath: "./covers/songs/10.mp3", coverPath:"./covers/covers/10.jpg"}
];

songsItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTim<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=1;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
     
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
     
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./covers/songs/${songIndex+1}.mp3`;//yeha problem hii.
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `./covers/songs/${songIndex+1}.mp3`;//yeha problem hii.
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `./covers/songs/${songIndex+1}.mp3`;//yeha problem hii.
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

 

