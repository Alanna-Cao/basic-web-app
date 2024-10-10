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

  const plusRegex = /(\d+)\s+plus\s+(\d+)/i;
  const match = query.match(plusRegex);
  if (match) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    const sum = num1 + num2;
    return `${sum}`;
    // return `${num1} plus ${num2} equals ${sum}`;
  }

  return "";
}
