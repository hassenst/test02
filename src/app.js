/**
 * Formular Validierung (Test02)
 * Markus Hassenstein, 2001
 */

//get the form
const form = document.getElementById('register');

/**
 * Calculate the age
 * Credits: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
 * @param {date} dateString
 * @returns int
 */

function calculateAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

/**
 * Validate the age and report Validity
 * @param {*} age
 */

function validateAge(age) {
  const dateField = document.getElementById('birthday');
  if (calculateAge(dateField.value) < age) {
    dateField.setCustomValidity('You must be at least 18 years old.');
  } else {
    dateField.setCustomValidity('');
  }
  dateField.reportValidity();
}

/**
 * Validate identical password inputs
 * @param {string} inputID (the <ID></ID> of the first password field)
 * @param {string} compareID (the ID of the second password field)
 */
function validatePasswords(passwordID, compareID) {
  const pwA = document.getElementById(passwordID);
  const pwB = document.getElementById(compareID);

  if (pwA.value !== pwB.value) {
    pwA.setCustomValidity('Passwords do not match.');
  } else {
    pwA.setCustomValidity('');
  }
  pwA.reportValidity();
}

/**
 * CharsLeft
 */
const profileText = document.getElementById('profile-text');
const chars = document.getElementById('chars');

//Event Listener for textarea
profileText.addEventListener('input', (event) => {
  let charsLeft = profileText.maxLength - profileText.value.length;
  chars.innerText = `${charsLeft}`;
});

//Unterdrücken der Standard HTML5 Form Validation Meldungen
form.addEventListener('invalid', (event) => event.preventDefault(), true);

//Event Listener Form submit
form.addEventListener('submit', (event) => {
  //Prevent default behaviour
  event.preventDefault();
  //Check the Passwords
  validatePasswords('password', 'password-confirm');
  //Check the Age
  validateAge(18);

  //Check all inputs
  Object.entries(form).forEach((entry) => {
    const [key, input] = entry;

    //skip validation for fieldsets & buttons
    if (!input.willValidate || input.hasAttribute('formnovalidate')) {
      return;
    }

    //set the error message
    let errorMessage = '';

    //set error message fields
    let span = document.querySelector(`#${input.id} ~ .error`);
    let icon = document.querySelector(`#${input.id} ~ .icon`);

    //check validity
    if (!input.checkValidity()) {
      //set the icons
      icon.classList.add('bg-xMark');
      icon.classList.remove('bg-check');
      errorMessage = input.validationMessage;
      if (input.validity.tooShort)
        errorMessage = `Your ${input.name} must contain at least ${input.minLength} chars`;
    } else {
      //set the icons
      icon.classList.remove('bg-xMark');
      icon.classList.add('bg-check');
    }
    //display the error message
    span.innerHTML = errorMessage;
  });

  //send form if everything is ok
  if (form.checkValidity()) {
    form.submit();
  }
});
