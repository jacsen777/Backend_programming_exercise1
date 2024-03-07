function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let num = 1; num <= 1000; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}
