
const loginCheckInput = document.getElementById('checkMeOutLog');
const loginSbmtBtn = document.getElementById('login-sbmt-btn');

loginSbmtBtn.setAttribute('disabled', 'disabled');

const loginOnChangeCheckInput = () => {
  if (loginCheckInput.checked) {
    loginSbmtBtn.removeAttribute('disabled');
  } else {
    loginSbmtBtn.setAttribute('disabled', 'disabled');
  }
}