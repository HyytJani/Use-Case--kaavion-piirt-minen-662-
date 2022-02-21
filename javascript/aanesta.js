



const a= JSON.parse(sessionStorage.getItem('kohde'));
    console.log(a)

    const valinnat=JSON.parse(localStorage.getItem(localStorage.key(a)))
    let otsikko=document.createElement("div");
    let sisalto=document.createTextNode( localStorage.key(a));
    otsikko.appendChild(sisalto);
    //rivi.type=('submit')
    document.querySelector(".aanesta").appendChild(otsikko);
    let rivinvaihto=document.createElement("br");
    document.querySelector(".aanesta").appendChild(rivinvaihto);
    for(let i=0;valinnat.vaihtoehdot.length>i;i++){
    let rivi=document.createElement("button");
    let teksti=document.createTextNode(valinnat.vaihtoehdot[i]);
    rivi.appendChild(teksti);
    rivi.type=('submit')
    document.querySelector(".aanesta").appendChild(rivi);
    let rivinvaihto=document.createElement("br");
    document.querySelector(".aanesta").appendChild(rivinvaihto);
    }
   
    
    
    
    