const song = [
    {
        "songName": "Bandheya",
        "songImg": "images/img1.jpg",
        "artistName": "Arijit Singh"
    },
    {
        "songName": "Mere Yara",
        "songImg": ' https://www.ilyricshub.com/wp-content/uploads/2021/10/mere-yaara-sooryavanshi-300x169.jpg',
        "artistName": "Arijit Singh"
    },
    {
        "songName": "Faded",
        "songImg": 'https://th.bing.com/th/id/OIP.UHoUagbdEdt1_oQksnWL2AHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        "artistName": "Alan Waker"
    },
    {
        "songName": "Dangal",
        "songImg": 'https://th.bing.com/th/id/OIP.bR0MukpYqpmaH8AJIxc7dAHaLH?pid=ImgDet&rs=1',
        "artistName": "Arijit Singh"
    },
    {
        "songName": "Jaan Nisar",
        "songImg":'https://th.bing.com/th/id/OIP.pzO3qfxgsBLUsoFPeKHCowHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',        
        "artistName": "Arijit Singh"
    },
    {
        "songName": "Ghungro",
        "songImg": 'https://i.scdn.co/image/ab67616d0000b273281650a8e8c5d04658d31ac1',
        "artistName": "Benny dayal"
    },
    {
        "songName": "Beat It",
        "songImg": 'https://m.media-amazon.com/images/M/MV5BOWIzMWYwODItNjRjNC00N2VhLWI2NGItMzM0YTU1ZTY3NTBlXkEyXkFqcGdeQXVyNDE1MjQ4MTk@._V1_FMjpg_UX1000_.jpg',
        "artistName": "Micheal Jackson"
    },
    {
        "songName": "Sanam",
        "songImg": 'https://th.bing.com/th/id/OIP.GIqVrBhdxvPiURICk7oTBQHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        "artistName": "Arijit Singh"
    },
    {
        "songName": "Shivvay",
        "songImg": 'https://th.bing.com/th/id/OIP.56fB2hDFuNpBxRrW9aIs2wHaJ3?w=182&h=243&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        "artistName": "Baadshah"
    },
    {
        "songName": "Panga",
        "songImg": 'https://th.bing.com/th/id/OIP.fU7GjF7YfhPuju3BwNYmlQHaFf?w=182&h=135&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        "artistName": "Arijit Singh"
    },
    {
        "songName": "Titli",
        "songImg": 'https://th.bing.com/th/id/OIP.WbfyafNume5lwuwJ6ng49wHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        "artistName": "Shreya Ghoshal"
    },
    {
        "songName": "Shivvay",
        "songImg": 'https://th.bing.com/th/id/OIP.56fB2hDFuNpBxRrW9aIs2wHaJ3?w=182&h=243&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        "artistName": "Baadshah"
    },
    {
        "songName": "Panga",
        "songImg": 'https://th.bing.com/th/id/OIP.fU7GjF7YfhPuju3BwNYmlQHaFf?w=182&h=135&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        "artistName": "Arijit Singh"
    },
    {
        "songName": "Titli",
        "songImg": 'https://th.bing.com/th/id/OIP.WbfyafNume5lwuwJ6ng49wHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        "artistName": "Shreya Ghoshal"
    },
    {
        "songName": "Bandheya",
        "songImg": ' https://i.scdn.co/image/ab67616d0000b2735cd31847e786b7e1e185e062',
        "artistName": "Arijit Singh"
    },{
        "songName": "Bandheya",
        "songImg": ' https://i.scdn.co/image/ab67616d0000b2735cd31847e786b7e1e185e062',
        "artistName": "Arijit Singh"
    }
]
Array.from(document.getElementsByClassName('songItems')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = song[i].songImg;
    element.getElementsByClassName('SongTitle')[0].src = song[i].songName;
    element.getElementsByClassName('subtitle')[0].src = song[i].artistName;
})

Array.from(document.getElementsByClassName('items')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = song[i].songImg;
})

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = song[i].songImg;
})
