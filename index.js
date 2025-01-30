const inputEl = document.getElementById('birthday');
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');


// let today = new Date().getDate();
// let age;

btnEl.addEventListener('click', calculateAge)

function calculateAge(){
  const birthdayValue = inputEl.value;
  if (!birthdayValue) {
    resultEl.innerHTML = "Please enter your date of birth.";
    return;
  }

  const birthDate = new Date(birthdayValue);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDay() - birthDate.getDay();

  // Adjust age if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  resultEl.innerHTML = `Your age is ${age} years old`;

   // Clear the input field after calculating age
   inputEl.value = "";
}

// calculateAge()