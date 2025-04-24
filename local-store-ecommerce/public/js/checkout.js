// Fetch cart from localStorage or initialize as empty array if not present
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartSummary = document.getElementById("cart-summary");
const confirmOrderButton = document.getElementById("confirm-order");
const orderMessage = document.getElementById("order-message");

// Function to render cart summary on the checkout page
function renderCartSummary() {
  let total = 0;
  cartSummary.innerHTML = ""; // Clear any existing content

  if (cart.length === 0) {
    cartSummary.innerHTML = "<p>Your cart is empty. Add items to your cart first.</p>";
  } else {
    cart.forEach((item) => {
      total += item.price; // Calculate total price

      const div = document.createElement("div");
      div.className = "bg-white p-4 shadow rounded flex justify-between items-center";

      div.innerHTML = `
        <div>
          <h2 class="text-lg font-semibold">${item.name}</h2>
          <p class="text-green-600 font-bold">₹${item.price}</p>
        </div>
      `;
      
      cartSummary.appendChild(div); // Append the item to the cart container
    });

    const totalDiv = document.createElement("div");
    totalDiv.className = "bg-white p-4 shadow rounded text-right";
    totalDiv.innerHTML = `
      <h2 class="text-lg font-semibold">Total</h2>
      <p class="text-green-600 font-bold">₹${total}</p>
    `;
    cartSummary.appendChild(totalDiv); // Append the total price
  }
}

// Function to handle order confirmation
confirmOrderButton.addEventListener("click", function() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before confirming the order.");
  } else {
    // Hide the order button and show the order placed confirmation
    confirmOrderButton.style.display = "none"; // Hide Confirm Order button
    orderMessage.style.display = "block"; // Show Order Placed message

    // Clear cart after order is placed (optional)
    localStorage.removeItem("cart");
    cart = [];

    // Optionally, you can redirect the user to a thank you page or reset the cart after a few seconds
    setTimeout(() => {
      window.location.href = "thank-you.html"; // Redirect to a "Thank You" page or any page after order is confirmed
    }, 2000);
  }
});

// Render the cart summary when the page loads
renderCartSummary();
