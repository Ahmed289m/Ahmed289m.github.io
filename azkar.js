let btn =document.getElementById("btn");
let ad3ya =[];
let elements =document.querySelectorAll(".ad3ya span");
for(let i=0;i<elements.length;i++)
{
    ad3ya[i]=elements[i].textContent;
}
console.log(ad3ya);

btn.onclick = function(){
    let doaa = Math.floor(Math.random()*10);
    swal(ad3ya[doaa]);
}