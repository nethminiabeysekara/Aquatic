document.addEventListener('DOMContentLoaded', function () {
    const orderItemsContainer = document.getElementById('order-items');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.getElementById('clear-cart-button');
    let totalPrice = 0;
    let orderItems = [];

        // Function to show the sidebar
        function showSidebar() {
            sidebar.classList.add('show');
        }
    
        // Function to hide the sidebar
        function hideSidebar() {
            sidebar.classList.remove('show');
        }
    

    
// Function to render order items in the sidebar
function renderOrderItems() {
  orderItemsContainer.innerHTML = '';
    orderItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}   x   ${item.quantity}`;
        orderItemsContainer.appendChild(listItem);
    });
   }


  // Function to add an item to the order summary
  function addItemToOrderSummary(item) {
    const existingItem = orderItems.find(i => i.name === item.name);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      orderItems.push(item);
    }

    // Function to update total price in the sidebar
function updateTotalPrice() {
  totalPriceElement.textContent = `Rs ${totalPrice.toFixed(2)}`;
}


  
    // Update total price immediately after modification
    totalPrice += item.price;
    updateTotalPrice();
  
    renderOrderItems();
  }

  
  // **New code for closing button:**
  const closesidebaricon = document.getElementById('close-sidebar-icon');

  if (closesidebaricon) {
    closesidebaricon.addEventListener('click', hideSidebar);
  } else {
    console.warn("Couldn't find element with ID 'closesidebaricon'. Make sure it exists in your HTML.");
  }



// Example usage (replace with your actual functionality):
const addToCartButtons = document.querySelectorAll('.btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productContainer = button.closest('.product');
        const productName = productContainer.querySelector('h2').textContent;
        const productPrice = parseFloat(productContainer.querySelector('.price').textContent.replace('Rs ', ''));
        addItemToOrderSummary({ name: productName, price: productPrice });
        showSidebar(); // Show sidebar when adding an item to the cart
    });
        // Event listener for clearing the cart
        clearCartButton.addEventListener('click', function() {
          orderItems = [];
          renderOrderItems();
          totalPrice = 0; // Reset total price to 0
          updateTotalPrice();
      });

      // Event listener for clicking the checkout button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function() {
  if (orderItems.length === 0) {
    alert('Please add items to your cart before proceeding to checkout.');
   }
  else {
   
    window.location.href = 'checkout.html';
   }
  });
});
})