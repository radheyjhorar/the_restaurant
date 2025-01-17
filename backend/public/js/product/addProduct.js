const addPrdctFileInpt = document.getElementById('inputProductImages')
const viewDiv = document.getElementById('add-prdct-slctd-imgs');

const fileInputOnChange = (input) => {

  const files = input.files;
  console.log(files);

  // Remove More than five Images
  if (files.length > 5) {
    alert('Maximum 5 images can be uploaded!');
    // Remove extra files (optional, depending on your implementation)
    files = Array.from(files).slice(0, 5);
  }

  // Display Selected Images
  if (files.length > 0) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(files[0]);
    viewDiv.appendChild(img);
  }

}