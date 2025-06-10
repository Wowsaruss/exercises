const isFloat = (num: number): boolean =>
  Number(num) === num && !Number.isInteger(num);

export function isLeap(year: number): boolean {
  const byFour = !isFloat(year / 4);
  const byOneHundred = !isFloat(year / 100);
  const byFourHundred = !isFloat(year / 400);
  if (byFour) {
    if (byOneHundred && byFourHundred) {
      return true;
    }
    if (byOneHundred) {
      return false;
    }
    return true;
  }

  return false;
}
