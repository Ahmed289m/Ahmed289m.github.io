let cards = document.querySelector(".cards");

let clockSpan = document.getElementById("timeclock");












getpraytime();
function getpraytime(){
    fetch("https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=8")
    .then(response => response.json())
    .then(data =>{

        let times = data.data.timings;
        cards.innerHTML ="";
        
        for(let time in times){







            cards.innerHTML += 
            `
            <div class="card">
            <div class="circle">
                <svg>
                    <circle cx="100" cy="100" r="100">
                
                    </circle>
                </svg>
                <div class="time">${times[time]}</div>
            </div>
            <p>${time}</p>
        </div>
            
            
            `
        }
    })
}


