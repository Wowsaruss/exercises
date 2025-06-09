export const colorCode = (color: string) => {
  if (color === "Colors") {
    return COLORS
  }

  return COLORS.indexOf(color)
}

export const COLORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]