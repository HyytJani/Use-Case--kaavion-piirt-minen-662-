document.forms['teeaanestys'].addEventListener('submit',lisaaAanestys)

   function lisaaAanestys(event){
      event.preventDefault();


      const otsikko=document.forms['teeaanestys']['otsikko'].value;
      const aihe=document.forms['teeaanestys']['aihe'].value;
      const vaihtoehto=document.forms['teeaanestys']['otsikko'].value;

      const vaihtoehdot=[];
      const inputs=document.querySelectorAll('input');

      inputs.forEach(function(input){
         if(input.name.indexOf('vaihtoehto')==0){
            vaihtoehdot.push(input.value);
         }
      })

      console.log(otsikko,aihe,vaihtoehdot);
      localStorage.setItem('aanestys',otsikko)
      console.log(localStorage.getItem('aanestys'))
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