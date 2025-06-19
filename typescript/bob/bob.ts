export function hey(message: string): string {
  const trimmed = message.trim();
  const messageArray = trimmed.split("");
  const messageLength = trimmed.length;
  const isUpperCase = trimmed === trimmed.toUpperCase()
  const isLowerCase = trimmed === trimmed.toLowerCase()
  const allWhitespace = trimmed === "";

  if (allWhitespace) {
    return "Fine. Be that way!";
  } else if ((messageArray[messageLength - 1] === "?") && (isUpperCase && !isLowerCase)) {
    return "Calm down, I know what I'm doing!";
  } else if (messageArray[messageLength - 1] === "?") {
    return "Sure.";
  } else if (isUpperCase && !isLowerCase) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
}
