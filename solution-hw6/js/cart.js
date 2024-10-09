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