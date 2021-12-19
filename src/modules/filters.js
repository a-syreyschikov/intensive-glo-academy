export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
}

export const priceFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min && max) {
      return goodsItem.price > min && goodsItem.price < max;
    } else if (min) {
      return goodsItem.price > min;
    } else if (max) {
      return goodsItem.price < max;
    }

    return true;
  });
}