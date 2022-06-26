let audio = document.querySelector(".quranplayer");
let sewar = document.querySelector(".sewar");
let aya = document.querySelector(".aya");
let play = document.querySelector(".play") ,
prev = document.querySelector(".prev") ,
next = document.querySelector(".next");
console.log(next);
getSewar();
function getSewar (){
fetch("https://api.quran.sutanlab.id/surah")
.then(response => response.json())
.then(data =>{
for(let sura in data.data)
{
    sewar.innerHTML += 
    `
    <div>
      <p>${data.data[sura].name.short}</p>
      <p>${data.data[sura].name.transliteration.en}</p>
      <p></p>
    </div>
    
    ` 


}

let allSewar = document.querySelectorAll(".sewar div"),
ayaAudio, ayaText;

allSewar.forEach((sura,index) => {
    
sura.addEventListener("click",()=>{
    fetch(`https://api.quran.sutanlab.id/surah/${index+1}`)
    .then(response => response.json())
    .then(data =>{
        ayaAudio=[];
        ayaText =[];
let verses  = data.data.verses;
verses.forEach(verse=>{

    ayaAudio.push(verse.audio.primary);
    ayaText.push(verse.text.arab);


}) 
let ayaindex = 0;


next.addEventListener("click",()=>{
    if(ayaindex<ayaAudio.length-1)
    {
        ayaindex++;
    }else{
        ayaindex=0;
    }

    change(ayaindex);

    })
    
    


prev.addEventListener("click",()=>{


    if (ayaindex<ayaAudio.length-1 && ayaindex !== 0)
    {
        ayaindex--;
        
    }else{
        ayaindex=0;
    }
    change(ayaindex);
})

let playing = false;

played();

function played(){
    if (playing === true){
        audio.pause();
        play.innerHTML = `<i class="fa-solid fa-circle-play">`
        playing = false;
    }else {
        audio.play();
        play.innerHTML = `<i class="fa-solid fa-circle-pause">`
        playing=true;

    }
}

play.addEventListener("click",played);


change(ayaindex);
audio.addEventListener("ended",()=>{
    ayaindex++;
    if(ayaindex<ayaAudio.length){
        change(ayaindex);
    }else{
        ayaindex=0;
        change(ayaindex);

        audio.pause();

    }
})

function change(index){
    audio.src = ayaAudio[index];
aya.innerHTML = ayaText[index];
audio.play();
}
 })
}
)



});
})
}





















