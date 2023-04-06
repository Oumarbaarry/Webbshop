const Name = localStorage.getItem("Name");
const Email = localStorage.getItem("Email");
const Adress = localStorage.getItem("Adress");
const Phone = localStorage.getItem("Phone");
const postal_code = localStorage.getItem("Postal code");
const city = localStorage.getItem("City");

const div = document.getElementById("confirmation");

div.innerHTML = `Hello ${Name} thank you for your order! <br/>
Email: ${Email}<br/>
Adress: ${Adress}<br/>
Phone: ${Phone}<br/>
You product will be delivered to: ${city}

`;

const params = new URLSearchParams(window.location.search);
const productId = document.getElementById("id");
const id = params.get("id");
const row = document.createElement("div");
console.log(id);
const fetchData = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  console.log(data);
  const row = document.createElement("div");
  console.log(data.title);
  row.classList.add("row");
  const productCard = `
    <div class="">
      <img id="bild" src="${data.image}" class="card-img-top" alt="/">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.description}</p>
        <p class="card-price">$${data.price}</p>
       
      </div>
    </div>
  `;
  row.innerHTML = productCard;
  document.body.appendChild(row);
};
fetchData();