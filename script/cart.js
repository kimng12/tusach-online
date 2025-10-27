// Cart functionality
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
console.log('Cart loaded from localStorage:', cartItems);

// Update cart count in header
function updateCartCount() {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    console.log('renderCartItems called, container:', cartItemsContainer, 'cartItems length:', cartItems.length);
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Giỏ hàng trống</h3>
                <p>Hãy thêm một số sách vào giỏ hàng của bạn!</p>
                <a href="../index.html" class="cta-button">Tiếp tục mua sắm</a>
            </div>
        `;
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image.replace('image/', '../image/')}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <p class="cart-item-price">${item.price}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, 0, this.value)">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeItem(${index})">Xóa</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Update quantity
function updateQuantity(index, change, newValue = null) {
    if (newValue !== null) {
        cartItems[index].quantity = parseInt(newValue) || 1;
    } else {
        cartItems[index].quantity += change;
        if (cartItems[index].quantity < 1) {
            cartItems[index].quantity = 1;
        }
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Re-render cartItems
    renderCartItems();
    updateCartSummary();
    updateCartCount();
}

// Remove item from cart
function removeItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCartItems();
    updateCartSummary();
    updateCartCount();
}

// Update cartItems summary
function updateCartSummary() {
    const subtotal = cartItems.reduce((sum, item) => {
        // Use originalPrice if available, otherwise parse from price string
        const price = item.originalPrice || parseInt(item.price.replace(/[^\d]/g, ''));
        return sum + (price * item.quantity);
    }, 0);
    
    const shipping = 30000;
    const total = subtotal + shipping;
    
    document.getElementById('subtotal').textContent = `${subtotal.toLocaleString()}₫`;
    document.getElementById('shipping').textContent = `${shipping.toLocaleString()}₫`;
    document.getElementById('total').textContent = `${total.toLocaleString()}₫`;
}

// Show checkout modal
function showCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    console.log('showCheckoutModal called, modal element:', modal);
    if (modal) {
        modal.style.display = 'flex';
        console.log('Modal display set to flex');
    } else {
        console.error('Checkout modal element not found!');
    }
}

// Hide checkout modal
function hideCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
}

// Show thank you modal
function showThankYouModal() {
    const modal = document.getElementById('thank-you-modal');
    modal.style.display = 'flex';
}

// Hide thank you modal
function hideThankYouModal() {
    const modal = document.getElementById('thank-you-modal');
    modal.style.display = 'none';
}

// Handle checkout form submission
function handleCheckout(event) {
    event.preventDefault();
    console.log('Checkout form submitted');
    
    // Get form data
    const formData = new FormData(event.target);
    const orderData = {
        fullname: formData.get('fullname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        payment: formData.get('payment'),
        items: cartItems,
        total: document.getElementById('total').textContent,
        date: new Date().toLocaleString('vi-VN')
    };
    
    console.log('Order data:', orderData);
    
    // Save order to localStorage (in real app, this would be sent to server)
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cartItems
    cartItems = [];
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Hide checkout modal and show thank you modal
    hideCheckoutModal();
    setTimeout(() => {
        showThankYouModal();
    }, 500);
    
    // Update cartItems display
    renderCartItems();
    updateCartSummary();
    updateCartCount();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cart page loaded, cartItems items:', cartItems);
    console.log('Cart items length:', cartItems.length);
    
    // Check if cart-items element exists
    const cartItemsContainer = document.getElementById('cart-items');
    console.log('Cart items container:', cartItemsContainer);
    
    // Cart is empty - no test items needed
    
    renderCartItems();
    updateCartSummary();
    updateCartCount();
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            console.log('Checkout button clicked, cartItems length:', cartItems.length);
            if (cartItems.length === 0) {
                alert('Giỏ hàng của bạn đang trống!');
                return;
            }
            console.log('Showing checkout modal...');
            showCheckoutModal();
        });
    } else {
        console.error('Checkout button not found!');
    }
    
    // Close modal buttons
    const closeModal = document.getElementById('close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', hideCheckoutModal);
    }
    
    const closeThankYou = document.getElementById('close-thank-you');
    if (closeThankYou) {
        closeThankYou.addEventListener('click', hideThankYouModal);
    }
    
    // Checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
    
    // Close modals when clicking outside
    const checkoutModal = document.getElementById('checkout-modal');
    const thankYouModal = document.getElementById('thank-you-modal');
    
    if (checkoutModal) {
        checkoutModal.addEventListener('click', function(e) {
            if (e.target === checkoutModal) {
                hideCheckoutModal();
            }
        });
    }
    
    if (thankYouModal) {
        thankYouModal.addEventListener('click', function(e) {
            if (e.target === thankYouModal) {
                hideThankYouModal();
            }
        });
    }
});

