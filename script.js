console.log("Welcome to Sanjufy");
let songIndex = 0;
let audioElement = new Audio('ap/1.mp3');
let play=document.getElementById('fas');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let dhillon = document.getElementById('dhillon');


let songItems = document.getElementsByClassName('songItem');
let songs = [
    { songName: "Excuses", filePath: "ap/1.mp3", coverPath: "cover3.jfif" },
    { songName: "Brown Munde", filePath: "ap/2.mp3", coverPath: "des.jfif" },
    { songName: "Desires", filePath: "ap/3.mp3", coverPath: "bm.jfif" },
    { songName: "Insane", filePath: "ap/4.mp3", coverPath: "in.jfif" },
    { songName: "Saada pyaar", filePath: "ap/5.mp3", coverPath: "mbelle.jfif" },
    { songName: "Ma Belle", filePath: "ap/6.mp3", coverPath: "sada.jfif" },
]



// audioElement.play();
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName(`songItemPlay`)).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove(`fa-play-circle`);
        e.target.classList.add(`fa-pause-circle`);
        dhillon.innerText = songs[songIndex-1].songName;
        audioElement.src = `ap/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('previous').addEventListener('click', () => {
    console.log('sanjana');

    if (songIndex <= 0) {
        songIndex = 6;
    }
    else {
        songIndex -= 1;
    }
    dhillon.innerText = songs[songIndex].songName;
    audioElement.src = `ap/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('play').addEventListener('click', () => {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
})

document.getElementById('next').addEventListener('click', () => {
    // console.log('sanjana');
    if (songIndex>6) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    dhillon.innerText = songs[songIndex-1].songName;
    audioElement.src = `ap/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
