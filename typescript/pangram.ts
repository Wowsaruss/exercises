export function isPangram(sentence: string): boolean {
  const abcs = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const sentenceArray = sentence.toLowerCase().split("");

  let count: number = 0;
  for (let i = 0; i < abcs.length; i++) {
    if (sentenceArray.includes(abcs[i])) {
      count++;
    }
  }

  return count === abcs.length;
}
