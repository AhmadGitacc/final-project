const cartBtn = document.querySelector('.open_cart')
const cartContainer = document.querySelector('.cart_container')

const dishQuantity = document.getElementById('quantity')

let i = 0;

cartBtn.addEventListener('click', () => {
    cartContainer.style.display = "block";
})

cartBtn.addEventListener('dblclick', () => {
    cartContainer.style.display = "none";
})
