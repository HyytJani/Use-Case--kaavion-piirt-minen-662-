




window.addEventListener('load',haeAanestykset)


function haeAanestykset(){
for(let i=0;localStorage.length>i;i++){
    let rivi=document.createElement("button");
    let sisalto=document.createTextNode( localStorage.key(i));
    rivi.appendChild(sisalto);
    rivi.id=(i);
    rivi.type=('button');
    rivi.onclick=(poistaAanestys);
    rivi.className=("btn btn-lg btn-primary text-uppercase")
    document.querySelector(".poista").appendChild(rivi);
    let rivinvaihto=document.createElement("br");
    document.querySelector(".poista").appendChild(rivinvaihto);
    
    
} }
function poistaAanestys(){
    localStorage.removeItem(localStorage.key(this.id))
    window.location.reload();


}
    