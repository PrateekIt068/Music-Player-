var arr=[
    {songName:"Sajni Re", url:"./songs/Sajni Re.mp3", img:"./images/Sajnire.jpg"},
    {songName:"Tum Se", url:"./songs/Tum Se.mp3", img:"./images/Tumse.jpg"},
    {songName:"Jale 2", url:"./songs/Jale 2.mp3", img:"./images/Jale2.jpg"},
    {songName:"Vellake", url:"./songs/Vellake.mp3", img:"./images/Vellake.jpg"},
    {songName:"You and Me", url:"./songs/You and Me.mp3", img:"./images/YouandMe.jpg"}
]
var allSongs=document.querySelector("#all-songs")
var poster=document.querySelector("#left")

var play=document.querySelector("#play")
var backward=document.querySelector("#backward")
var forward=document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction(){ 
var clutter=""

arr.forEach(function(elem,index){
    clutter += `<div class="song-card" id=${index}>
                    <div class="part1">
                        <img src="${elem.img}" alt="">
                        <h5>${elem.songName}</h5>
                    </div>
                    <h6>2:50</h6>
                </div>`
})
allSongs.innerHTML = clutter

audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})`

}
mainFunction()

allSongs.addEventListener("click", function(dets){
    selectedSong = dets.target.id
    play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
    flag=1
    mainFunction()
    audio.play()
    a
})

var flag=0

play.addEventListener("click", function(){
    if(flag == 0){
    play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
    flag=1
    audio.play()
    mainFunction()
    }
    else{
        play.innerHTML=`<i class="ri-play-mini-fill"></i>`
        flag=0
        audio.pause()
        mainFunction()
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
    }
    else{
        backward.style.opacity = 0.4
    }
})