


const showOrHideSbmtBtn = (checkInput, sbmtBtn) => {

  const checkboxInput = document.getElementById(checkInput);
  const SbmtBtn = document.getElementById(sbmtBtn);

  if (checkboxInput.checked) {
    SbmtBtn.removeAttribute('disabled');
  } else {
    SbmtBtn.setAttribute('disabled', 'disabled');
  }
}