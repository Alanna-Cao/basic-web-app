export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is alannac"
    )
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "alanna"
    )
  }

  // const plusRegex = /(\d+)\s+plus\s+(\d+)/i;
  // const match = query.match(plusRegex);
  // if (match) {
  //   const num1 = parseInt(match[1], 10);
  //   const num2 = parseInt(match[2], 10);
  //   const sum = num1 + num2;
  //   return `${sum}`;
  // }

  const addRegex = /(\d+)(?:\s+plus\s+(\d+))+/gi; // Match multiple "plus"
  const matchAdd = query.match(addRegex);
  if (matchAdd) {
    const numbers = query.split(/\s+plus\s+/).map(num => parseInt(num.trim(), 10));
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    return `${sum}`;
  }


  const largestRegex = /which of the following numbers is the largest:\s*([\d,?\s*]+)/i;
  const matchLargest = query.match(largestRegex);
  if (matchLargest) {
    const numbers = matchLargest[1]
      .split(',')
      .map(num => parseInt(num.trim(), 10));
    const largest = Math.max(...numbers);
    return `${largest}`;
  }

  const multiplyRegex = /(\d+)\s+multiplied by\s+(\d+)/i;
  const matchMult = query.match(multiplyRegex);
  if (matchMult) {
    const num1 = parseInt(matchMult[1], 10);
    const num2 = parseInt(matchMult[2], 10);
    const product = num1 * num2;
    return `${product}`;
  }

  const squareCubeRegex = /which of the following numbers is both a square and a cube:\s*([\d,?\s*]+)/i;
  const matchSquareCube = query.match(squareCubeRegex);
  if (matchSquareCube) {
    const numbers = matchSquareCube[1]
      .split(',')
      .map(num => parseInt(num.trim(), 10));

    const isSquareAndCube = (num: number): boolean => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    };

    const results = numbers.filter(isSquareAndCube);
    return `${results}`;
  }

  const minusRegex = /(\d+)\s+minus\s+(\d+)/i;
  const matchMinus = query.match(minusRegex);
  if (matchMinus) {
    const num1 = parseInt(matchMinus[1], 10);
    const num2 = parseInt(matchMinus[2], 10);
    const difference = num1 - num2;
    return `${difference}`;
  }

  const primesRegex = /which of the following numbers are primes:\s*([\d,?\s*]+)/i;
  const matchPrimes = query.match(primesRegex);
  if (matchPrimes) {
    const numbers = matchPrimes[1]
      .split(',')
      .map(num => parseInt(num.trim(), 10));

      const isPrime = (num: number): boolean => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
  
      const primes = numbers.filter(isPrime);
      return `${primes}`;
    }
  
    const powerRegex = /(\d+)\s+to the power of\s+(\d+)/i;
    const matchPower = query.match(powerRegex);
    if (matchPower) {
      const base = parseInt(matchPower[1], 10);
      const exponent = parseInt(matchPower[2], 10);
      const result = Math.pow(base, exponent);
      return `${result}`;
    }

    const complexMathRegex = /(\d+)\s+multiplied by\s+(\d+)\s+plus\s+(\d+)/i;
    const matchComplexMath = query.match(complexMathRegex);
    if (matchComplexMath) {
      const num1 = parseInt(matchComplexMath[1], 10);
      const num2 = parseInt(matchComplexMath[2], 10);
      const num3 = parseInt(matchComplexMath[3], 10);
      const result = num1 * num2 + num3;
      return `${result}`;
    }  
    
    const complexMathRegex2 = /(\d+)\s+plus\s+(\d+)\s+multiplied by\s+(\d+)/i;
    const matchComplexMath2 = query.match(complexMathRegex2);
    if (matchComplexMath2) {
      const num1 = parseInt(matchComplexMath2[1], 10);
      const num2 = parseInt(matchComplexMath2[2], 10);
      const num3 = parseInt(matchComplexMath2[3], 10);
      const result = num1 + num2 * num3;
      return `${result}`;
    }  

    return "";
}
