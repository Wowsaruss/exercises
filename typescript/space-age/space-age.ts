interface Planets {
  earth: number;
  mercury: number;
  venus: number;
  mars:	number;
  jupiter: number;
  saturn:	number;
  uranus:	number;
  neptune: number;
}

const planetOrbitalPeriods: Planets = {
  "earth":	1.0,
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "mars":	1.8808158,
  "jupiter":	11.862615,
  "saturn":	29.447498,
  "uranus":	84.016846,
  "neptune":	164.79132
}

export function age(planet: keyof Planets, seconds: number): number {
  const secondsInEarthYear = 31_557_600;
  const planetOP: number = planetOrbitalPeriods[planet];
  
  // Calculate age in Earth years
  const earthYears = seconds / secondsInEarthYear;
  // Calculate age on the given planet
  const planetYears = earthYears / planetOP;
  
  return Number(planetYears.toFixed(2));
}
