// Declaring variables for the start and end range of numbers where we want to check for prime numbers.
const startRange = 2;
const endRange = 50;

// For Loop iterating thru our specific range of numbers.
for (i = startRange; i <= endRange; i++) {
  // Checking if current number is a Prime by declaring variable below.
  let isPrime = true;
  for (j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i + " is a prime number");
  }
}
