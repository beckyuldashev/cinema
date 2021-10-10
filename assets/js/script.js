const schemeSvg = document.querySelector('.scheme-svg');
const priceTotalTag = document.querySelector('.price__total');

const price = 400;
let totalPrice = 0;


if (schemeSvg) {
  schemeSvg.addEventListener('click', (event) => {
    
    if (!event.target.classList.contains('booked') && !event.target.classList.contains('light')) {
      event.target.classList.toggle('active');

      let ticketsCount = schemeSvg.querySelectorAll('.active').length;
      totalPrice = price * ticketsCount;
      priceTotalTag.textContent = totalPrice;
      
    }
    
  });
}