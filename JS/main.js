const fizzBuzzContainer = document.getElementById("fizz-row");

// CICLO DA 1 A 100
for (let i = 1; i <= 100; i++) {
  let content;

  //  SE IL NUMERO E' DIVISIBILE PER 15
  if (i % 15 == 0) {
    content = "Fizzbuzz";
    // console.log('fizzbuzz');
  }

  // ALTRIMENTI SE IL NUMERO E' DIVISIBILE PER 3
  else if (i % 3 == 0) {
    content = "Fizz";
    // console.log('fizz');
  }

  // ALTRIMENTI SE IL NUMERO E' DIVISIBILE PER 5
  else if (i % 5 == 0) {
    content = "Buzz";
    // console.log('buzz');
  } else {
    content = i;
    // console.log(i);
  }
  // TEMPLATE
  const template = 
}

