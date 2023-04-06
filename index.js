async function getProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      const productsDiv = document.getElementById('products');
      const row = document.createElement('div');
      row.classList.add('row');
      products.forEach((product) => { 
        const col = document.createElement('div');
        col.classList.add('col-md-4');
        const productCard = `
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-price">$${product.price}</p>
              <a href="order.html?id=${product.id}" class="btn btn-primary card-button">Order now</a>
            </div>
          </div>
        `;
        col.innerHTML = productCard;
        row.appendChild(col);
      });
      productsDiv.appendChild(row);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  }
  
  getProducts();
  console.log('okej');

  const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const product = {
      id: button.dataset.productId,
      name: button.dataset.productName,
      image: button.dataset.productImage,
      price: button.dataset.productPrice
    };
    
  });
});


  