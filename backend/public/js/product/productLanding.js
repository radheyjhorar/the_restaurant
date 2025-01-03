
const mainImgEl = document.getElementById('mainImg');

const changeImg = (src) => {
  mainImgEl.src = `/public/product-images/${src}.jpg`;
}
