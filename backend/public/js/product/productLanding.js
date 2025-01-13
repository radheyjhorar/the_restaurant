
const mainImgEl = document.getElementById('mainImg');

const changeImg = (src) => {
  if (src) {
    mainImgEl.src = `/public/uploadedImages/${src}`;
    mainImgEl.alt = src;
  }
}
