
const mainImgEl = document.getElementById('mainImg');

const changeImg = (src) => {
  if (src) {
    mainImgEl.src = `/public/product-images/${src}.jpg`;
  }
}
