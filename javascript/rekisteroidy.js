const kayttaja=[];


document.forms['rekisteroidy'].addEventListener('submit',rekisteroiUusiKayttaja);

    function rekisteroiUusiKayttaja(event){
       

        event.preventDefault();
         
        const username = document.forms['rekisteroidy']['kayttajatunnus'].value
        const salasana = document.forms['rekisteroidy']['salasana'].value
        const varmistus = document.forms['rekisteroidy']['varmistus'].value
         
        if (username.length<1){
            alert('Syötä käyttäjätunnus');
            return
        }
        if(salasana.length<1){
            alert("Syötä salasana");
            return
        }
        if(salasana.localeCompare(varmistus) !=0){
            alert('Tarkista salasanat');
            return
        }
        
        kayttaja.push({tunnus:username,sana:salasana})

        console.log(kayttaja)
     }