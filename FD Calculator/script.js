function calculate(){

  const principle = parseFloat(document.getElementById('principle').value);
  const interest = parseFloat(document.getElementById('interestRate').value);
  const tenure = parseFloat(document.getElementById('tenure').value);


  const maturity = principle + (principle * interest * tenure)/100;


  document.getElementById('result').innerText = `Maturity Amount: ${maturity.toFixed(2)}`;



}

document.getElementById('calculateBtn').addEventListener('click',calculate);