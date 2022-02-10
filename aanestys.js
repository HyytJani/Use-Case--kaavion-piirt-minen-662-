function lisaaVaihtoehto(){
   let vaihtoehto=document.createElement("label");
   let teksti=document.createTextNode("Syötä vaihtoehto:");
   vaihtoehto.appendChild(teksti);
   document.querySelector(".lomake").appendChild(vaihtoehto);
   let rivinvaihto=document.createElement("br");
   document.querySelector(".lomake").appendChild(rivinvaihto);
   let tekstikentta=document.createElement("input");
   tekstikentta.className=("form-control")
   document.querySelector(".lomake").appendChild(tekstikentta);
   let rivinvaihto2=document.createElement("br");
   document.querySelector(".lomake").appendChild(rivinvaihto2);
   

}