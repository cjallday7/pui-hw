//Base Price of the Original Cinnamon Roll
const basePrice = 2.49;

//Glazing Option Variables
const allGlazeOptions = [
    {
        name: "Keep Original",
        price: 0.00
    },
    {
        name: "Sugar Milk",
        price: 0.00
    },
    {
        name: "Vanilla Milk",
        price: 0.50
    },
    {
        name: "Double Chocolate",
        price: 1.50
    }
];

//Pack Size Variables
const allPackSizeOptions = [
    {
        description: "one",
        size: 1
    },
    {
        description: "three",
        size: 3
    },
    {
        description: "six",
        size: 6
    },
    {
        description: "twelve",
        size: 12
    }
];

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Populate the glazing dropdown
    let glazingSelect = document.getElementById('glaze-options');
    for (let i = 0; i < allGlazeOptions.length; i++) {
        let option = new Option(allGlazeOptions[i].name, allGlazeOptions[i].price);
        glazingSelect.add(option);
    }

    // Populate the pack size dropdown
    let packSizeSelect = document.getElementById('pack-size');
    for (let i = 0; i < allPackSizeOptions.length; i++) {
        let option = new Option(allPackSizeOptions[i].description, allPackSizeOptions[i].size);
        packSizeSelect.add(option);
    }

    // Function to update the price
    function updatePrice() {
        // Get the selected glazing price adaptation
        const glazingPrice = parseFloat(glazingSelect.value);
        
        // Get the selected pack size price adaptation
        const packPrice = parseFloat(packSizeSelect.value);
        
        // Calculate the total price
        const totalPrice = (basePrice + glazingPrice) * packPrice;
        
        // Update the price in the HTML
        const priceDisplay = document.querySelector('.get-the-roll h3');
        priceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Add event listeners to trigger price update when user changes selections
    glazingSelect.addEventListener('change', updatePrice);
    packSizeSelect.addEventListener('change', updatePrice);
    
    // Update the price when the page first loads
    updatePrice();
});