// Roll class definition (based on the provided structure)
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }

    getTotalPrice() {
        return this.basePrice * this.size; // Assuming the base price is for one roll
    }
}

window.onload = function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Function to update the total price
  function updateTotalPrice() {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.basePrice;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2);
  }

  // Function to render cart items
  function renderCartItems() {
    cartItemsContainer.innerHTML = '';  // Clear previous items

    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.type} - Glazing: ${item.glazing} - Pack Size: ${item.size} - Price: $${item.basePrice}</p>
        <button class="remove-item" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  }

  // Render the items and update the total price
  renderCartItems();
  updateTotalPrice();

  // Remove item from cart
  cartItemsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
      const itemIndex = event.target.getAttribute('data-index');
      cart.splice(itemIndex, 1);  // Remove the item from the cart array

      // Update localStorage and re-render the cart
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCartItems();
      updateTotalPrice();

      // Print the current contents of the cart in the console for debugging
      console.log('Updated Cart:', JSON.parse(localStorage.getItem('cart')));
    }
  });
};

// Initialize cart with four items
let cart = [
    new Roll('Original', 'Sugar Milk', 1, 2.49),
    new Roll('Walnut', 'Vanilla Milk', 12, 3.99),
    new Roll('Raisin', 'Sugar Milk', 3, 2.99),
    new Roll('Apple', 'Original', 3, 3.49)
];

// Function to render items in the cart
function displayCartItems() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear any existing items
    let total = 0;

    cart.forEach((roll, index) => {
        // Create a div for each cart item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="item">
                <img class="shopping-cart-image" alt="${roll.type} Cinnamon Roll" src="../assets/products/${roll.type.toLowerCase()}-cinnamon-roll.jpg">
                <div class="final-description">
                    <p>${roll.type} Cinnamon Roll</p>
                    <p>Glazing: ${roll.glazing}</p>
                    <p>Pack Size: ${roll.size}</p>
                </div>
                <p class="price">$${roll.getTotalPrice().toFixed(2)}</p>
                <h5 class="remove" data-index="${index}">Remove</h5>
            </div>
        `;

        cartContainer.appendChild(itemDiv);
        total += roll.getTotalPrice();
    });

    // Update total price
    document.getElementById('total-price').innerText = total.toFixed(2);

    // Add event listeners for removing items
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

// Function to remove an item from the cart
function removeItem(event) {
    const index = event.target.getAttribute('data-index');
    cart.splice(index, 1); // Remove the item from the cart array
    displayCartItems(); // Re-render the cart items and update the total price
}

// Initial render of the cart
displayCartItems();