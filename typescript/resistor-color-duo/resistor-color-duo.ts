interface Bands {
  black: number;
  brown: number;
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  violet: number;
  grey: number;
  white: number;
}

const bands: Bands = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedValue(bandArray: string[]): number {
  const numberArray: string[] = [];

  const bandKeys: string[] = Object.keys(bands);
  const bandValues = Object.values(bands);

  for (let i = 0; i < bandArray.length; i++) {
    const index: number = bandKeys.indexOf(bandArray[i]);
    numberArray.push(`${bandValues[index]}`);
  }

  return parseInt(numberArray.join(""));
}
