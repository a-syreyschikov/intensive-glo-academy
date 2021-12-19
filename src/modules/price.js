import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";

const price = () => {
  const priceInputs = document.querySelectorAll('.filter-price_input');

  priceInputs.forEach((item) => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');

    item.addEventListener('input', () => {
      const min = minInput.value;
      const max = maxInput.value;

      getData().then((data) => {
        renderGoods(priceFilter(data, min, max));
      });
    });
  });

};

export default price;