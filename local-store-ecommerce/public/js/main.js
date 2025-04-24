const products = [
    { id: 1, name: "Organic Milk", price: 60, image: "https://thumbs.dreamstime.com/b/fresh-organic-milk-nature-background-49456608.jpg" },
    { id: 2, name: "Whole Wheat Bread", price: 100, image: "https://www.chainbaker.com/wp-content/uploads/2022/02/IMG_2362.jpg" },
    { id: 3, name: "Farm Fresh Eggs", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5NMuPALqkcldw5WgRVLM0UFRLvnzAbcuUg&s" },
    { id: 4, name: "Fresh Apples", price: 250, image: "https://media.istockphoto.com/id/187420397/photo/red-apples.jpg?s=612x612&w=0&k=20&c=2gP5VblBy8wBB1aMuB9godHm_QYuKOdvb1U_f9h4Kjk=" },
  ];
  
  const productList = document.getElementById("product-list");
  
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow p-4 transition hover:scale-105 duration-300";
  
    card.innerHTML = `
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded" />
        <h2 class="text-lg font-semibold mt-2">${product.name}</h2>
        <p class="text-green-600 font-bold">₹${product.price}</p>
      </a>
      <button onclick="addToCart(${product.id})"
        class="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Add to Cart
      </button>
    `;
  
    productList.appendChild(card);
  });
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added ${product.name} to cart`);
  }
 