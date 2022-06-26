let anaMuslim ="أنا مسلم";
let element = document.getElementById("typed");
let btnAbout = document.getElementById("aboutbtn");
let laoding = document.querySelector(".loading");
let i=0;
window.onload =  function (){
    let typing = setInterval(function(){element.textContent += anaMuslim[i] ;
        i++;
        if(i>anaMuslim.length-1)
        {
            clearInterval(typing);
            if( window.localStorage.getItem("login") !== "true")
            swal("ما اسمك:", {
                content: "input",
              })
              .then((value) => {
                  if (value !== "" ){
                swal(`أهلا بيك يا ${value}
                
                هذا الموقع تم انشاءه بواسطه أحمد سلامه 
                ليكن حصن لكل مسلم و صدقه جاريه لي و لأهلي
                
                `);
            window.localStorage.setItem("login","true");
            }
              });
        }
    },300)
    
};


btnAbout.onclick =function(){
    
    window.scrollTo({
        top: 760,
        behavior: "smooth"
    });
}

window.addEventListener("load",function(){
    laoding.style.display = "none";
})
