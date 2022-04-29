let left_scrolls = document.getElementById('left-scrolls');
let right_scrolls = document.getElementById('right-scrolls');
let pop_songs = document.getElementsByClassName('pop_songs')[0];
let items = document.getElementsByClassName('items')[0];

left_scrolls.addEventListener('click', () => {
    pop_songs.scrollLeft -= 330;
})

right_scrolls.addEventListener('click', () => {
    pop_songs.scrollLeft += 330;
})

left_scrolls.addEventListener('click', () => {
    items.scrollLeft -= 330;
})

right_scrolls.addEventListener('click', () => {
    items.scrollLeft += 330;
})
console.log("hello")
let items1 = document.querySelector(".items").children;

for(let i=0 ; i<items1.length; ++i ){
    items1[i].addEventListener('click' , function(){
       let deeksha = document.getElementById("deeksha")
      
      
     let image1 = items1[i].children;
       deeksha.replaceWith(image1);
       console.log(image1)
       console.log(deeksha)
        console.log("hey")
    })
}