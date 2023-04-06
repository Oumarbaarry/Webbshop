const form = document.querySelector("#order-form");
      const params = new URLSearchParams(window.location.search);

      const id = params.get("id");
      console.log(id);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const adress = document.getElementById("adress");
        const phone = document.getElementById("phone");
        const postal_code = document.getElementById("postal_code");
        const city = document.getElementById("city");
        if (name.value.length < 2 || name.length > 50) {
     return  alert('Namnet måste vara minst 2 tecken och max 50 tecken.');
   
    }
 

  
  if (email.value.indexOf('@') === -1 || email.value.length > 50) {
   return alert('E-postadressen måste innehålla "@" och max 50 tecken.');
    
  }

  // Kontrollera att telefonnumret innehåller siffror, bindestreck och parenteser och max 50 tecken
  if (!/^[\d\s()+-]{1,50}$/.test(phone.value)) {
    return alert('Telefonnummer får bara innehålla siffror, bindestreck och parenteser. Max 50 tecken.');
   
  }

  // Kontrollera att gatuadressen är minst 4 tecken och max 50 tecken
  if (adress.value.length < 4 || adress.value.length > 50) {
   return alert('Gatuadressen måste vara minst 4 tecken och max 50 tecken.');
  
  }

  // Kontrollera att postnumret har exakt 6 tecken i formatet 000 00
  if (!/^\d{3}\s\d{2}$/.test(postal_code.value)) {
    return alert('Postnumret måste ha exakt 6 tecken i formatet 000 00.');
    
  }

  // Kontrollera att orten är minst 2 tecken och max 50 tecken
  if (city.value.length < 2 || city.value.length > 50) {
    return alert('Orten måste vara minst 2 tecken och max 50 tecken.');
   
  }
  
  

        localStorage.setItem("Name", name.value);
        localStorage.setItem("Email", email.value);
        localStorage.setItem("Adress", adress.value);
        localStorage.setItem("Phone", phone.value);
        localStorage.setItem("Postal Code", postal_code.value);
        localStorage.setItem("City", city.value);
        // Redirect the user to the confirmation page
        window.location.href = `confirmation.html?id=${id}`;
      });