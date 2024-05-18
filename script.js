const container = document.querySelector("#container");
const button = document.querySelector("#btn");


let lastboxes = 0;
let boxs = [];
for( let a = 0; a<16*16;a++){
    lastboxes = a;
    let box  = document.createElement("div");
    box.setAttribute("class","box");
    box.setAttribute("id","box");
    boxs.push(box);
   
    container.appendChild(boxs[a]);
    box.addEventListener("mouseover",()=>{
        box.style.background = "green";
  
        
    })}

button.addEventListener("click", ()=> {
    let boxes=prompt("Die Anzahl der Blöcke pro Reihe","5") ;
    
    for(let a = lastboxes;a>0;a--){
        container.removeChild(boxs[a])
    }
    container.removeChild(boxs[0]);
    boxs = [];
    for( let a = 0; a<(boxes*boxes);a++){
        lastboxes = a;
        let box  = document.createElement("div");
        box.setAttribute("class","box");
        box.setAttribute("id","box");
        boxs.push(box);
        box.style.width = (640/boxes)/2 + "px";
        box.style.height = (640/boxes)/2 + "px";
        box.style.margin = (640/boxes)/4 + "px";
        container.appendChild(boxs[a]);
        box.addEventListener("mouseover",()=>{
            box.style.background = "green";

        })}
})