let birthdayFormEl = document.querySelector('#birthdateForm');
let birthDate = document.querySelector('#birthDate');
let luckyNum = document.querySelector('#luckyNum');

function checkDOB (e) {
    e.preventDefault();
    let sumOfDOB = addStringDigits(birthDate.value);
    let luckyNumber = luckyNum.value;
    let outputMsg;

    if (sumOfDOB % luckyNumber === 0) outputMsg = `Your birthday is lucky :)  <img src='./images/happy.svg' alt="image link not working">`;
    else outputMsg = `Your birthday is not lucky :/ <img src='./images/sad.svg' alt="image link not working">`;

    document.querySelector('#outputEl').innerHTML = outputMsg;
}

function addStringDigits (string) {
    // string = string.replaceAll('-', '');
    let stringSum = 0;
    for (i = 0; i<string.length; i++) {
      let currDigit = Number(string[i]);
      if (currDigit) stringSum = stringSum + currDigit;
    }
    return stringSum;
}

birthdayFormEl.addEventListener('submit', checkDOB);
