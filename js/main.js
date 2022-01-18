const checkCpf = (event) => {
  event.preventDefault();
  const input = document.querySelector("[input]").value;


  const response = document.querySelector("[response]");
  var firstTenDigits = [];
  var firstPatter = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  var secondPatter = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  var sumFirstPatter = 0;
  var sumSecondPatter = 0;
  var firstCheck = false;
  var secondCheck = false;

  for (let i = 0; i <= 9; i++) {
    firstTenDigits[i] = "" + input[i];
  }
  /* Check First Digit */
  for (let i = 0; i <= 8; i++) {
    sumFirstPatter = sumFirstPatter + firstTenDigits[i] * firstPatter[i];
  }
  if ((sumFirstPatter * 10) % 11 == "" + input[9]) {
    firstCheck = true;
  }

  /* Check Second Digit */
  for (let i = 0; i <= 9; i++) {
    sumSecondPatter = sumSecondPatter + firstTenDigits[i] * secondPatter[i];
  }
  if ((sumSecondPatter * 10) % 11 == "" + input[10]) {
    secondCheck = true;
  }

  if (firstCheck & secondCheck) {
    response.classList.add("valid");
  } else {
    response.classList.add("invalid");
  }
};

const buttomSubmit = document.querySelector("[submit]");
buttomSubmit.addEventListener("click", checkCpf);
