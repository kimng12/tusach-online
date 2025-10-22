// Product data is now imported from products-data.js
// The productsData object contains all 30 books with comprehensive information

// Get product ID from URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load product data
function loadProductData() {
    const productId = getProductIdFromUrl();
    const product = productsData[productId];
    
    if (!product) {
        console.error('Product not found');
        return;
    }
    
    // Update page title
    document.title = `${product.title} - Tủ Sách Online`;
    
    // Update product information
    document.getElementById('main-product-image').src = product.image;
    document.getElementById('main-product-image').alt = product.title;
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-description').textContent = product.description;
    
    // Update rating
    const ratingElement = document.querySelector('.rating-text');
    if (ratingElement) {
        ratingElement.textContent = `(${product.rating}/5 - ${product.reviewCount} đánh giá)`;
    }
    
    // Update features list
    const featuresList = document.getElementById('product-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Update add to cart button
    const addToCartBtn = document.getElementById('add-to-cart-detail');
    addToCartBtn.setAttribute('data-product-id', product.id);
}

// Add to cart functionality
function addToCartFromDetail() {
    const productId = getProductIdFromUrl();
    const product = productsData[productId];
    
    if (!product) return;
    
    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Adding to cart from detail page:', product.title, 'Cart before:', cart);
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart after adding:', cart);
    
    // Update cart count
    updateCartCount();
    
    // Show success message
    showNotification('Đã thêm sản phẩm vào giỏ hàng!', 'success');
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update cart count in header
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// Load related products
function loadRelatedProducts() {
    const currentProductId = parseInt(getProductIdFromUrl());
    const currentProduct = productsData[currentProductId];
    const relatedProductsContainer = document.getElementById('related-products');
    
    if (!currentProduct) {
        relatedProductsContainer.innerHTML = '<p>Không tìm thấy sản phẩm liên quan.</p>';
        return;
    }
    
    // Get products from the same category, excluding the current product
    const allProductsInSameCategory = Object.values(productsData).filter(product => 
        product.category === currentProduct.category && product.id !== currentProductId
    );

    // Shuffle and get up to 3 related products
    const shuffledProducts = allProductsInSameCategory.sort(() => 0.5 - Math.random());
    const relatedProducts = shuffledProducts.slice(0, 3);
    
    relatedProductsContainer.innerHTML = ''; // Clear existing related products

    if (relatedProducts.length === 0) {
        relatedProductsContainer.innerHTML = '<p>Không có sản phẩm liên quan trong cùng danh mục.</p>';
        return;
    }

    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', product.id);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <div class="product-buttons">
                    <button class="product-btn view-detail" data-product-id="${product.id}">Xem chi tiết</button>
                    <button class="product-btn add-to-cart" data-product-id="${product.id}">Thêm vào giỏ hàng</button>
                </div>
            </div>
        `;
        
        relatedProductsContainer.appendChild(productCard);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadProductData();
    loadRelatedProducts();
    updateCartCount();
    
    // Add event listeners
    const addToCartBtn = document.getElementById('add-to-cart-detail');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCartFromDetail);
    }
    
    const buyNowBtn = document.querySelector('.buy-now-btn');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            addToCartFromDetail();
            // Redirect to cart page
            setTimeout(() => {
                window.location.href = '/tusach-online/view/cart.html';
            }, 1000);
        });
    }
    
    // Handle related products clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-detail')) {
            const productId = e.target.getAttribute('data-product-id');
            window.location.href = `product-detail.html?id=${productId}`;
        }
        
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-product-id');
            const product = productsData[productId];
            
            if (product) {
                // Add to cart logic
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                console.log('Adding to cart from related products:', product.title, 'Cart before:', cart);
                const existingItem = cart.find(item => item.id === product.id);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        quantity: 1
                    });
                }
                
                localStorage.setItem('cart', JSON.stringify(cart));
                console.log('Cart after adding from related products:', cart);
                updateCartCount();
                showNotification('Đã thêm sản phẩm vào giỏ hàng!', 'success');
            }
        }
    });
});

