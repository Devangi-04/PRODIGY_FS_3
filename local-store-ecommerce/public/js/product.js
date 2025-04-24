// Get the product id from the URL query parameters
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const products = [
  { id: 1, name: "Organic Milk", price: 60, image: "https://thumbs.dreamstime.com/b/fresh-organic-milk-nature-background-49456608.jpg", desc: "Pure and organic milk from local farms. Our milk is free from artificial hormones, preservatives, and additives, ensuring that you get the freshest, healthiest milk possible. Perfect for your morning coffee or a refreshing glass on its own." },
  { id: 2, name: "Whole Wheat Bread", price: 100, image: "https://www.chainbaker.com/wp-content/uploads/2022/02/IMG_2362.jpg", desc: "Freshly baked bread made with 100% whole wheat. This bread is rich in fiber, vitamins, and minerals. It has a dense, hearty texture with a slightly nutty flavor, perfect for sandwiches, toast, or as an accompaniment to your favorite soup." },
  { id: 3, name: "Farm Fresh Eggs", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5NMuPALqkcldw5WgRVLM0UFRLvnzAbcuUg&s", desc: "ree-range eggs, delivered fresh every day. These eggs come from hens that are raised in open pastures, eating natural food. They are known for their rich, golden yolks and superior taste. Ideal for baking, cooking, or enjoying as a simple breakfast." },
  { id: 4, name: "Fresh Apples", price: 250, image: "https://media.istockphoto.com/id/187420397/photo/red-apples.jpg?s=612x612&w=0&k=20&c=2gP5VblBy8wBB1aMuB9godHm_QYuKOdvb1U_f9h4Kjk=", desc: "Crisp, juicy apples picked straight from orchards. Our apples are grown without pesticides and are naturally sweet and crunchy. They are a great source of fiber and antioxidants, making them a healthy and delicious snack."}
];

// Find the product based on the URL parameter
const product = products.find(p => p.id === id);
const container = document.getElementById("product-detail");

if (product) {
  // Inject product details into the container
  container.innerHTML = `
    <div class="grid md:grid-cols-2 gap-6">
      <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-lg shadow-lg" />
      <div class="flex flex-col justify-between">
        <h2 class="text-2xl font-bold mb-2">${product.name}</h2>
        <p class="mb-4 text-gray-600">${product.desc}</p>
        <p class="text-green-600 text-xl font-semibold mb-4">₹${product.price}</p>
        <button onclick="addToCart(${product.id})"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  `;
} else {
  // If product not found
  container.innerHTML = `<p class="text-red-500 text-lg">Product not found.</p>`;
}

// Function to add the product to the cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  
  if (!product) {
    alert("Product not found.");
    return;
  }

  // Get current cart from localStorage or initialize as empty array
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product already exists in the cart
  const productExists = cart.some(item => item.id === product.id);
  if (productExists) {
    alert(`${product.name} is already in your cart.`);
    return;
  }

  // Add product to cart
  cart.push(product);

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Notify user that product has been added
  alert(`${product.name} has been added to your cart.`);
}
