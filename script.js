const products = [
    {
        id: 1,
        name: "iPhone 14",
        price: 600,
        brand: "apple",
        image: "https://cdn2.fptshop.com.vn/unsafe/iphone_14_48a46d1684.png"
    },
    {
        id: 2,
        name: "Samsung Galaxy S22",
        price: 320,
        brand: "samsung",
        image: "https://cdn2.fptshop.com.vn/unsafe/samsung_galaxy_s22_fac476f60b.png"
    },
    {
        id: 3,
        name: "Google Pixel 7",
        price: 363,
        brand: "google",
        image: "https://www.didongmy.com/vnt_upload/product/10_2022/thumbs/(600x600)_pixel_7_lemongrass_thumb_600x600_didongmy_01.jpg"
    },
    {
        id: 4,
        name: "Honor Magic 6 Pro",
        price: 636,
        brand: "honor",
        image: "https://cdn.xtmobile.vn/vnt_upload/product/01_2024/thumbs/(600x600)_crop_honor-magic-6-pro-12gb-256gb-xtmobile.png"
    },
    {
        id: 5,
        name: "Xiaomi 14 5G",
        price: 483,
        brand: "xiaomi",
        image: "https://viostore.vn/wp-content/uploads/2023/10/3-6.png"
    },
    {
        id: 6,
        name: "Xiaomi 13",
        price: 430,
        brand: "xiaomi",
        image: "https://viostore.vn/wp-content/uploads/2024/01/10-4.png"
    },
    {
        id: 7,
        name: "iPhone 15 Pro Max",
        price: 1100,
        brand: "apple",
        image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-gold-thumbnew-600x600.jpg"
    },
    {
        id: 8,
        name: "iPhone 16 Pro Max",
        price: 1600,
        brand: "apple",
        image: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone-16-Pro-Series-Desert1.jpg"
    },
    {
        id: 9,
        name: "iPhone 13 Pro Max",
        price: 650,
        brand: "apple",
        image: "https://clickbuy.com.vn/uploads/images/2022/04/avt-iphone-13-pro-max-gold.png"
    },
    {
        id: 10,
        name: "Honor 200",
        price: 508,
        brand: "honor",
        image: "https://cdn.viettablet.com/images/detailed/61/honor-200-pro-1.jpg"
    },
    {
        id: 11,
        name: "Samsung Galaxy S24 Ultra",
        price: 1179,
        brand: "samsung",
        image: "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-grey-thumbnew-600x600.jpg"
    },
    {
        id: 12,
        name: "vivo X100 Pro 5G",
        price: 1179,
        brand: "vivo",
        image: "https://dienthoaihay.vn/images/products/2024/06/04/original/vivo-x100-pro_1717493012.jpg"
    },
    {
        id: 13,
        name: "Samsung Galaxy S24 Plus",
        price: 821,
        brand: "samsung",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s24-plus.png"
    },
    {
        id: 14,
        name: "Samsung Galaxy S24 Ultra",
        price: 1260,
        brand: "samsung",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222_1.png"  
    },
    {
        id: 15,
        name: "Samsung Galaxy Z Flip6",
        price: 1016,
        brand: "samsung",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-flip-6-xanh-duong-6_2.png"  
    },
    {
        id: 16,
        name: "Samsung Galaxy Z Fold6",
        price: 1561,
        brand: "samsung",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-6-xanh_5_.png"  
    },
    {
        id: 17,
        name: "iPhone 16",
        price: 614,
        brand: "apple",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png"
    },
    {
        id: 18,
        name: "iPhone 16 Plus",
        price: 1036,
        brand: "apple",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:300:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-plus-hong_2.png"
    },
    {
        id: 19,
        name: "OPPO Find N3",
        price: 1708,
        brand: "oppo",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/i/find_n3_-_combo_product_-_gold.png"
    },
    {
        id: 20,
        name: "Huawei Mate Xt",
        price: 2800,
        brand: "huawei",
        image: "https://media.vov.vn/sites/default/files/styles/large/public/2024-09/huawei-mate-xt-rear-finish-102-3717-1695-1725962087.jpg"
    },
    {
        id: 21,
        name: "Google Pixel 8 Pro",
        price: 699,
        brand: "google",
        image: "https://www.didongmy.com/vnt_upload/product/01_2024/thumbs/(600x600)_google_pixel_8_pro_mint_didongmy_thumb_600x600_1.jpg"
    },
    {
        id: 22,
        name: "Honor Magic 6 Ultimate",
        price: 932,
        brand: "honor",
        image: "https://cdn.xtmobile.vn/vnt_upload/product/03_2024/thumbs/600_Honor_magic_6_ultimate_16gb_512gb_mau_tim_xtmobile.jpg"
    },
    {
        id: 23,
        name: "Xiaomi 14 Ultra",
        price: 1098,
        brand: "xiaomi",
        image: "https://clickbuy.com.vn/uploads/pro/thumbs/xiaomi-14-ultra-chinh-hang-2514-hxdq_197730.jpg"
    },
    {
        id: 24,
        name: "Xiaomi Mix Fold2",
        price: 809,
        brand: "xiaomi",
        image: "https://clickbuy.com.vn/uploads/images/2023/09/ava-mixfold2-gold.png"
    },
    {
        id: 25,
        name: "Xiaomi 13 Ultra",
        price: 663,
        brand: "xiaomi",
        image: "https://clickbuy.com.vn/uploads/images/2023/09/ava-13ultra-white.png"
    },
    {
        id: 26,
        name: "Samsung Galaxy S23 Ultra",
        price: 1016,
        brand: "samsung",
        image: "https://clickbuy.com.vn/uploads/pro/thumbs/samsung-galaxy-s23-ultra-5g-12gb-512gb-chinh-hanghtml-4960-tsdu_180190.jpg"
    },
    {
        id: 27,
        name: "Vivo IQOO Z9 Turbo",
        price: 292,
        brand: "vivo",
        image: "https://clickbuy.com.vn/uploads/pro/thumbs/iqoo-z9-5g_197727.jpg"
    },
    {
        id: 28,
        name: "iPhone 15 Plus",
        price: 976,
        brand: "iphone",
        image: "https://clickbuy.com.vn/uploads/images/2023/09/iphone-15-hong-dai-dien-1.png"
    },
    {
        id: 29,
        name: "Oppo Reno 12 5G",
        price: 976,
        brand: "oppo",
        image: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/oppo_reno_12_trang_d776379731.jpg"
    },
    {
        id: 30,
        name: "Xiaomi 14T 5G",
        price: 529,
        brand: "xiaomi",
        image: "https://cdn.tgdd.vn/Products/Images/42/329938/xiaomi-14t-black-thumb-600x600.jpg"
    },
];

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slides');
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    console.log(`Hiện slide thứ: ${currentSlide + 1}`); // Kiểm tra slide hiện tại
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Tự động chuyển slide sau mỗi 3 giây
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);


const exchangeRate = 24000; // Tỷ giá USD -> VND

const productList = document.getElementById('product-list');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const totalPriceElem = document.getElementById('totalPrice');
const cartCountElem = document.getElementById('cartCount');

let cart = []; // Giỏ hàng

// Hiển thị danh sách sản phẩm
function renderProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const priceInVND = product.price * exchangeRate; // Chuyển đổi USD sang VND
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Giá: ${priceInVND.toLocaleString('vi-VN')} VND</p> <!-- Hiển thị giá tiền Việt -->
            <button onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    showNotification(`${product.name} đã được thêm vào giỏ hàng!`); // Hiển thị thông báo
    updateCartCount();
}


// Lọc sản phẩm theo thương hiệu
document.getElementById('brandSelect').addEventListener('change', function(e) {
    const selectedBrand = e.target.value;
    const filteredProducts = selectedBrand
        ? products.filter(product => product.brand === selectedBrand)
        : products; // Nếu không có thương hiệu nào được chọn, hiển thị tất cả sản phẩm
    renderProducts(filteredProducts);
});

// Tìm kiếm sản phẩm
document.getElementById('search').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchText)
    );
    renderProducts(filteredProducts);
});

// Xử lý giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    showNotification(`${product.name} đã được thêm vào giỏ hàng!`, ); // Hiển thị thông báo
    updateCartCount();
}


function updateCartCount() {
    cartCountElem.innerText = cart.length;
}

// Hiển thị giỏ hàng
document.getElementById('cartBtn').onclick = function() {
    showCart();
    cartModal.style.display = "block"; // Hiển thị modal giỏ hàng
}

// Đóng modal giỏ hàng
document.getElementsByClassName('close-cart')[0].onclick = function() {
    cartModal.style.display = "none";
}

// Hiển thị nội dung giỏ hàng
function showCart() {
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const priceInVND = item.price * exchangeRate;
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>${item.name} - ${priceInVND.toLocaleString('vi-VN')} VND</p>
        `;
        cartItems.appendChild(itemDiv);
        totalPrice += priceInVND;
    });

    totalPriceElem.innerText = `Tổng giá: ${totalPrice.toLocaleString('vi-VN')} VND`;
}

// Xử lý thanh toán
document.getElementById('checkoutBtn').onclick = function() {
    showNotification("Thanh toán thành công! Cảm ơn bạn đã mua hàng!"); // Hiển thị thông báo
    cart = []; // Xóa giỏ hàng sau khi thanh toán
    updateCartCount();
    cartModal.style.display = "none"; // Đóng modal giỏ hàng
}


// Xử lý đăng nhập
document.getElementById('submitLogin').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành công!");
        document.getElementById('loginModal').style.display = "none"; // Đóng modal đăng nhập
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
}

// Mở modal đăng nhập
document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginModal').style.display = "block";
}

// Đóng modal đăng nhập
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('loginModal').style.display = "none";
}

// Đóng modal khi nhấn ra ngoài modal
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}



// Khởi động danh sách sản phẩm
renderProducts(products);


// Hàm hiện thông báo
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    notification.style.opacity = 1;

    // Tự động ẩn thông báo sau 3 giây
    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.style.display = 'none';
        }, 100); // Thời gian ẩn thông báo
    }, 5000);
}



