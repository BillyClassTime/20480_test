const españolas = document.getElementsByClassName("es");
const inglesas = document.getElementsByClassName("en");

 
for (let i = 0; i < inglesas.length;i++)
{
    let elemento = inglesas[i];
    elemento.classList.add("novisible");
    elemento.addEventListener("click", cambiaringles.bind(this) , false);
}
for (let i = 0; i < españolas.length;i++)
{
    let elemento = españolas[i];
    elemento.addEventListener("click", cambiarespañol.bind(this) , false);
}

function cambiarespañol()
{ 
    for (let i =0;i < inglesas.length;i++)
    {
        let elemento = inglesas[i];
   
        elemento.classList.remove("novisible");
    }
    for (let i =0;i < españolas.length;i++)
    {
        let elemento = españolas[i];
        elemento.classList.add("novisible");
    }
}
function cambiaringles(){
 
    for (let i =0;i < inglesas.length;i++)
    {
        let elemento = inglesas[i];
 
        elemento.classList.add("novisible");
      
    }
    for (let i =0;i < españolas.length;i++)
    {
        let elemento = españolas[i];
 
        elemento.classList.remove("novisible");
    }
}