// Get the rollType from the URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

// Access the roll data from rollsData.js
const rollData = rolls[rollType];

// Update the title and image on the page based on the rollType
document.querySelector(".header").textContent = `${rollType} Cinnamon Roll`;
document.querySelector(".product-detail-image").src = `../assets/products/${rollData.imageFile}`;
document.querySelector("#price").textContent = `${rollData.basePrice.toFixed(2)}`;

// Class to represent a Roll
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

window.onload = function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const addToCartButton = document.getElementById('add-to-cart');
  addToCartButton.addEventListener('click', function() {
    // Get selected options from the page
    const rollType = document.querySelector('.header').textContent;  // Assuming the roll type is in the header
    const rollGlazing = document.getElementById('glaze-options').value;
    const packSize = document.getElementById('pack-size').value;
    const rollPrice = document.getElementById('price').textContent.replace('$', '');

    // Create a new Roll object and add it to the cart array
    const newRoll = new Roll(rollType, rollGlazing, packSize, parseFloat(rollPrice));
    cart.push(newRoll);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Print the current contents of the cart in the console for debugging
    console.log('Cart:', JSON.parse(localStorage.getItem('cart')));
  });
};


// Initialize an empty cart array
const cart = [];

// Glazing and Pack Size Options
const allGlazeOptions = [
  { name: "Keep Original", price: 0.00 },
  { name: "Sugar Milk", price: 0.00 },
  { name: "Vanilla Milk", price: 0.50 },
  { name: "Double Chocolate", price: 1.50 }
];

const allPackSizeOptions = [
  { description: "1", size: 1 },
  { description: "3", size: 3 },
  { description: "6", size: 6 },
  { description: "12", size: 12 }
];

// Populate glazing dropdown
let glazingSelect = document.getElementById("glaze-options");
allGlazeOptions.forEach(option => {
  let glazeOption = new Option(option.name, option.price);
  glazingSelect.add(glazeOption);
});

// Populate pack size dropdown
let packSizeSelect = document.getElementById("pack-size");
allPackSizeOptions.forEach(option => {
  let packOption = new Option(option.description, option.size);
  packSizeSelect.add(packOption);
});

// Function to update the price based on selections
function updatePrice() {
  const glazingPrice = parseFloat(glazingSelect.value); // Get selected glazing price
  const packSize = parseInt(packSizeSelect.value); // Get selected pack size multiplier

  // Calculate total price based on the base price of the roll
  const totalPrice = (rollData.basePrice + glazingPrice) * packSize;
  
  // Update the price display in the DOM
  const priceDisplay = document.querySelector("#price");
  priceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
}

// Add event listeners to update the price when dropdown selections change
glazingSelect.addEventListener("change", updatePrice);
packSizeSelect.addEventListener("change", updatePrice);

// Initially update the price when the page loads
updatePrice();

// Handle "Add to Cart" button click
const addToCartButton = document.getElementById("add-to-cart");
addToCartButton.addEventListener("click", function() {
  const selectedGlazing = glazingSelect.options[glazingSelect.selectedIndex].text; // Get glazing name
  const selectedPackSize = parseInt(packSizeSelect.value); // Get pack size

  // Create a new Roll instance and add it to the cart
  const newRoll = new Roll(rollType, selectedGlazing, selectedPackSize, rollData.basePrice);
  cart.push(newRoll);
  
  // Print the cart to the console (for debugging purposes)
  console.log(cart);
});
