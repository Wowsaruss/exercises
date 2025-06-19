export function hey(message: string): string {
  const messageArray = message.split("");
  const messageLength = message.length;
  const isUpperCase = message === message.toUpperCase()
  const allWhitespace = message.trim() === "";

  if (allWhitespace) {
    return "Fine. Be that way!";
  } else if (messageArray[messageLength - 1] === "?" && isUpperCase) {
    return "Calm down, I know what I'm doing!";
  } else if (messageArray[messageLength - 1] === "?") {
    return "Sure.";
  } else if (isUpperCase) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
}
