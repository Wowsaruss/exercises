function generateRandomLetters() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < 2; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }

  return result;
}

function generateRandomNumbers() {
  const numbers = "0123456789";
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return result;
}

export class Robot {
  constructor() {}

  public get name(): string {
    return `${generateRandomLetters()}${generateRandomNumbers()}`
  }

  public resetName(): void {
    throw new Error('Implement Robot#resetName')
  }

  public static releaseNames(): void {
    throw new Error('Implement Robot.releaseNames')
  }
}
