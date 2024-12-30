
const registerCheckInput = document.getElementById('checkRegForm');
const registerSbmtBtn = document.getElementById('register-sbmt-btn');

registerSbmtBtn.setAttribute('disabled', 'disabled');

const registerOnChangeCheckInput = () => {
  if (registerCheckInput.checked) {
    registerSbmtBtn.removeAttribute('disabled');
  } else {
    registerSbmtBtn.setAttribute('disabled', 'disabled');
  }
}