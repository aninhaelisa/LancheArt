const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});


setInterval(() => {
  nextButton.click();
}, 5000);

const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-btn');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const buyBtn = document.getElementById('buy-btn');

// Array para armazenar os produtos do carrinho
let cart = [];

// Função para abrir o modal do carrinho
cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'flex';
  updateCartModal();
});

// Função para fechar o modal do carrinho
closeBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Função para atualizar a div do carrinho com os itens e o preço total
function updateCartModal() {
  cartItemsContainer.innerHTML = ''; // Limpar itens existentes
  let total = 0;
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <p>${item.name} - R$ ${item.price}</p>
    `;
    cartItemsContainer.appendChild(itemDiv);
    total += item.price;
  });

  // Atualiza o total
  totalPriceElement.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para adicionar itens ao carrinho
function addToCart(name, price) {
  cart.push({ name, price });
  updateCartModal();
}

// Adicionar funcionalidade de adicionar produtos ao carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    addToCart(name, price);
  });
});

// Função para finalizar a compra e fechar o carrinho
buyBtn.addEventListener('click', () => {
  alert('Compra realizada com sucesso!');
  // Limpar carrinho após a compra
  cart = [];
  updateCartModal();
  cartModal.style.display = 'none';
});

