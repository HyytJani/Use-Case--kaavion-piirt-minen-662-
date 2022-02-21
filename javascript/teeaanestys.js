
const vaihtoehdot=[];




document.forms['teeaanestys'].addEventListener('submit',lisaaAanestys)

   function lisaaAanestys(event){   
      event.preventDefault();  

      const otsikko=document.forms['teeaanestys']['otsikko'].value;
      const vaihtoehto=document.forms['teeaanestys']['otsikko'].value;     
      const inputs=document.querySelectorAll('input');

      inputs.forEach(function(input){
         if(input.name.indexOf('vaihtoehto')==0){
            vaihtoehdot.push(input.value); }
      })
      
      localStorage.setItem(otsikko,JSON.stringify({vaihtoehdot:vaihtoehdot}))
      document.forms['teeaanestys'].reset();
     
   }



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