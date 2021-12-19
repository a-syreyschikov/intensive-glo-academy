const getData = (str) => {
  return fetch(
    `https://test-ee2de-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
    )
    .then((response) => {
      return response.json();
    });
};

export default getData;