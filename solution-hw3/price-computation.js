const basePrice = 2.49;
const updatedPrice = ((basePrice + all))
// const glazingPrice = document.getElementById(glaze-options);
// const packSize = document.getElementsById(pack-size);

// When the page loads, find the select element.
const glazeElement = document.querySelector("glaze-options");
const packElement = document.querySelector("pack-size");

//Glazing Option Variables
const allGlazeOptions = [
    {
        description: "Keep Original",
        price: 0.00
    },
    {
        description: "Sugar Milk",
        price: 0.00
    },
    {
        description: "Vanilla Milk",
        price: 0.50
    },
    {
        description: "Double Chocolate",
        price: 1.50
    }
];

//Pack Size Variables
const allPackSizeOption = [
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

const glazeChoice  = document.querySelector("glaze-options")
const packChoice = document.querySelector("pack-size")

const glazeIndex = parse(this.value);
const bunGlazePrice = basePrice + glazeIndex;