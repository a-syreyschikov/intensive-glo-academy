import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = cartModal.querySelector('.cart-close');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const cartCount = document.querySelector('.counter');
  const cartSendBtn = cartModal.querySelector('.cart-confirm');
  const goodsWrapper = document.querySelector('.goods');
  const carWrapper = cartModal.querySelector('.cart-wrapper');
  
  const getCounCart = () => {
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];

    cartCount.textContent = cart.length;
  };

  const openCart = () => {
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];

    cartModal.style.display = 'flex';

    renderCart(cart);

    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price; 
    }, 0);
  };

  const closeCart = () => {
    cartModal.style.display = '';
  };

  getCounCart();

  cartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
  
  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem('goods'));
      const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : [];
      const goodItem = goods.find((item) => {
        return item.id === +key;
      });

      cart.push(goodItem);

      localStorage.setItem('cart', JSON.stringify(cart));

      getCounCart();
    }
  });

  carWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const index = cart.findIndex((item) => {
        return item.id === +key;
      });

      cart.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(cart));

      renderCart(cart);

      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);

      getCounCart();
    }
  });

  cartSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];
    
    postData(cart).then(() => {
      localStorage.removeItem('cart');

      renderCart([]);

      cartTotal.textContent = 0;

      getCounCart();
    });
  });
};

export default cart;

