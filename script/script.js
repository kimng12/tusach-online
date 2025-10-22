// Import product data
// Note: In a real application, this would be loaded from a server
// For now, we'll include the data directly in the script

// DOM Elements
const cartCount = document.querySelector('.cart-count');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const productBtns = document.querySelectorAll('.product-btn');
const ctaButton = document.querySelector('.cta-button');
const navLinks = document.querySelectorAll('.nav-link');

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log('Main script cart loaded:', cart);

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Add to cart functionality
function addToCart(productId) {
    // Use the comprehensive product data
    const product = productsData[productId];
    if (!product) return;
    
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
    console.log('Added to cart:', product.title, 'Cart now has:', cart);
    
    // Update cart count
    updateCartCount();
    
    // Add visual feedback
    const cartLink = document.querySelector('.cart-link');
    if (cartLink) {
        cartLink.style.transform = 'scale(1.1)';
        setTimeout(() => {
            cartLink.style.transform = 'scale(1)';
        }, 200);
    }
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        // Simple search - highlight matching products
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productPrice = card.querySelector('.product-price').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || productPrice.includes(searchTerm)) {
                card.style.border = '2px solid #667eea';
                card.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.3)';
            } else {
                card.style.border = '1px solid #f0f0f0';
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }
        });
    } else {
        // Reset all product cards
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.style.border = '1px solid #f0f0f0';
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    }
}

// Smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Category filtering functionality
function filterByCategory(category) {
    const productsGrid = document.querySelector('.products-grid');
    
    // Clear existing products
    productsGrid.innerHTML = '';
    
    // Get all products from the category
    const categoryProducts = Object.values(productsData).filter(product => 
        product.category === category
    );
    
    if (categoryProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <h3>Không có sách nào trong danh mục này</h3>
                <p>Vui lòng chọn danh mục khác</p>
            </div>
        `;
        return;
    }
    
    // Display products from the selected category
    categoryProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title} - ${product.author}">
        </div>
        <div class="product-info">
            <h3>${product.title}</h3>
            <p class="product-author">${product.author}</p>
            <p class="product-price">${product.price}</p>
            <div class="product-rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                <span class="rating-text">(${product.rating}/5)</span>
            </div>
            <div class="product-buttons">
                <button class="product-btn view-detail" data-product-id="${product.id}">Xem chi tiết</button>
                <button class="product-btn add-to-cart" data-product-id="${product.id}">Thêm vào giỏ hàng</button>
            </div>
        </div>
    `;
    
    return card;
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Category filtering
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            // Update section title
            const sectionTitle = document.querySelector('#products h2');
            const categoryName = this.querySelector('h3').textContent;
            sectionTitle.textContent = categoryName;
            
            // Scroll to products section
            document.getElementById('products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add "Show All" functionality
    function showAllProducts() {
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';
        
        // Show all products
        Object.values(productsData).forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Update section title
        const sectionTitle = document.querySelector('#products h2');
        sectionTitle.textContent = 'Tất cả sách';
    }

    // Add click event to "Sách nổi bật" title to show all products
    const productsTitle = document.querySelector('#products h2');
    if (productsTitle) {
        productsTitle.style.cursor = 'pointer';
        productsTitle.addEventListener('click', showAllProducts);
    }

    // Add click event to "Show All" button
    const showAllBtn = document.getElementById('show-all-btn');
    if (showAllBtn) {
        showAllBtn.addEventListener('click', showAllProducts);
    }

    // Product buttons - handle view detail and add to cart
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-detail')) {
            const productId = e.target.getAttribute('data-product-id');
            window.location.href = `view/product-detail.html?id=${productId}`;
        }
        
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-product-id');
            addToCart(parseInt(productId));
            showNotification('Đã thêm sản phẩm vào giỏ hàng!', 'success');
        }
    });

    // CTA button - scroll to products
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            smoothScroll('#products');
        });
    }

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                smoothScroll(href);
            }
        });
    });

    // Cart link functionality
    const cartLink = document.querySelector('.cart-link');
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'view/cart.html';
        });
    }

    // Initialize cart count
    updateCartCount();
    
});

// Notification system
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

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.product-card, .about-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
window.addEventListener('scroll', handleScrollAnimations);

// Add initial styles for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.product-card, .about-content');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    handleScrollAnimations();
});

// Product hover effects
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Search input focus effects
searchInput.addEventListener('focus', function() {
    this.parentElement.style.background = 'rgba(255,255,255,0.3)';
    this.parentElement.style.transform = 'scale(1.05)';
});

searchInput.addEventListener('blur', function() {
    this.parentElement.style.background = 'rgba(255,255,255,0.2)';
    this.parentElement.style.transform = 'scale(1)';
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});
