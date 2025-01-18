const addPrdctFileInpt = document.getElementById("inputProductImages");
const viewDiv = document.getElementById("add-prdct-slctd-imgs");

addPrdctFileInpt.addEventListener("change", function(event) {

  const selectedFiles = event.target.files;

  if (selectedFiles.length > 5) {
    alert("Maximum 5 images can be uploaded!");

    // Remove extra files from the selection
    const allowedFiles = Array.from(selectedFiles).slice(0, 5);

    event.target.files = allowedFiles;
  }

  // Display selected files
  if (event.target.files.length > 0) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(event.target.files[0]);
    viewDiv.appendChild(img);
  }

});