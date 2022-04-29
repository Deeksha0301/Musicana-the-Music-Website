 //play pause of music
 let music = new Audio ('song.mp3');

 let musicPlay = document.getElementById('bo');

 musicPlay.addEventListener('click',()=> {
     if (music.paused || music.currentTime<=0) {
         music.play();
         musicPlay.classList.remove('bx-play-circle');
         musicPlay.classList.add('bx-pause-circle');
     }
     else {
         music.pause();
         musicPlay.classList.remove('bx-pause-circle');
         musicPlay.classList.add('bx-play-circle');
     }
 })
 
 //starting time and duration of song
 let currentStart = document.getElementById('currentStart');
 let currentEnd = document.getElementById('currentEnd');
 let bar2 = document.getElementById('bar2');
 let seek = document.getElementById('seek');
 let dot = document.getElementsByClassName('dot')[0];

 music.addEventListener('timeupdate',()=>{
     let music_curr = music.currentTime;
     let music_dur = music.duration;

     let minu = Math.floor(music_dur/60);
     let seco = Math.floor(music_dur%60);
     if (seco<10) {
         seco = `0${seco}`
     }
     currentEnd.innerText = `${minu}:${seco}`;

     let minu1 = Math.floor(music_curr/60);
     let seco1 = Math.floor(music_curr%60);
     if (seco1<10) {
         seco1 = `0${seco1}`
     }
     currentStart.innerText = `${minu1}:${seco1}`;

     //progress Bar update
     let progressBar = parseInt((music.currentTime/music.duration)*100);
     seek.value = progressBar;
     let seekbar = seek.value;
     bar2.style.width = `${seekbar}%`;
     dot.style.left = `${seekbar}%`;
 })


 seek.addEventListener('change', ()=>{
     music.currentTime = seek.value * music.duration/100;
 })

 music.addEventListener('ended', ()=>{
    musicPlay.classList.remove('bx-pause-circle');
    musicPlay.classList.add('bx-play-circle');
 })

 //volume
 let vol_icon = document.getElementById('vol_icon');
 let vol = document.getElementById('vol');
 let vol_dot = document.getElementById('vol_dot');
 let vol_bar = document.getElementsByClassName('vol_bar')[0];

 vol.addEventListener('change', ()=>{
     if (vol.value == 0) {
         vol_icon.classList.remove('bx-volume-full');
         vol_icon.classList.add('bx-volume-mute');
         vol_icon.classList.remove('bx-volume-low');

     }
     if (vol.value > 0) {
         vol_icon.classList.remove('bx-volume-full');
         vol_icon.classList.remove('bx-volume-mute');
         vol_icon.classList.add('bx-volume-low');

     }
     if (vol.value > 50) {
         vol_icon.classList.add('bx-volume-full');
         vol_icon.classList.remove('bx-volume-mute');
         vol_icon.classList.remove('bx-volume-low');

     }

     let vol_a = vol.value;
     vol_bar.style.width = `${vol_a}%`;
     vol_dot.style.left = `${vol_a}%`;
     music.volume = vol_a/100;
 })

 //previous or next song

 document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=15){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    music.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    music.currentTime = 0;
    music.play();
    musicPlay.classList.remove('bx-play-circle');
    musicPlay.classList.add('bx-pause-circle');

})

document.getElementById('back').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    music.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    music.currentTime = 0;
    music.play();
    musicPlay.classList.remove('bx-play-circle');
    musicPlay.classList.add('bx-pause-circle');
})