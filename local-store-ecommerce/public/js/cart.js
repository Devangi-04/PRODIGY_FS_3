// Fetch cart from localStorage or initialize as empty array if not present
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const checkoutButton = document.querySelector("button"); // Checkout button

// Function to render cart items and update total price
function renderCart() {
  cartContainer.innerHTML = ""; // Clear current cart items
  let total = 0;

  // If the cart is empty, display a message
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>"; // Display if cart is empty
    totalPriceEl.textContent = `Total: ₹0`; // Set total price to ₹0 if cart is empty
    return;
  }

  // Render each cart item
  cart.forEach((item) => {
    total += item.price; // Calculate total price

    const div = document.createElement("div");
    div.className = "bg-white p-4 shadow rounded flex justify-between items-center";

    // Insert cart item details (name, price, remove button)
    div.innerHTML = `
      <div>
        <h2 class="text-lg font-semibold">${item.name}</h2>
        <p class="text-green-600 font-bold">₹${item.price}</p>
      </div>
      <button onclick="removeFromCart(${item.id})"
        class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
        Remove
      </button>
    `;

    cartContainer.appendChild(div); // Append the item to the cart container
  });

  totalPriceEl.textContent = `Total: ₹${total}`; // Display total price
}

// Function to remove item from cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id); // Filter out the item by id
  localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
  renderCart(); // Re-render cart after removal
}

// Checkout button functionality
checkoutButton.addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before proceeding.");
  } else {
    window.location.href = "checkout.html"; // Redirect to your checkout page
  }
});

// Render cart when the page loads
renderCart();
