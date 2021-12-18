const getData = (str) => {
  return fetch('https://test-ee2de-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
      return response.json();
    });
};

export default getData;