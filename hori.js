
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('bx-1')).forEach((element) => {
        element.classList.add('bxs-right-arrow-circle');
        element.classList.remove('bx-pause-circle');
    })
}
const makeAllBack = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}
let index = 0;
let poster_play = document.getElementById('poster');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('bx-1')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlay();
        e.target.classList.remove('bxs-right-arrow-circle');
        e.target.classList.add('bx-pause-circle');
        music.src = `audio/${index}.mp3`;
        // poster_play.src = `img/${index}.jpg`
        music.play();
        let title = title.filter((ele)=>{
            return ele.id == index;
        })

        title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })

        musicPlay.classList.add('bx-pause-circle');
            musicPlay.classList.remove('bx-play-circle');
        music.addEventListener('ended', ()=>{
            musicPlay.classList.remove('bx-pause-circle');
            musicPlay.classList.add('bx-play-circle');
         })

        makeAllBack();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})