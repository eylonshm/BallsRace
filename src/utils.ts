export const getRandomNumber = (min: number, max: number): number => {
  const floatRandom = Math.random()
  const difference = max - min
  const random = Math.round(difference * floatRandom)
  const randomWithinRange = random + min
  return randomWithinRange
}

export const loop = (times: number, callback: Function) => {
  for (let i = 0; i < times; i++) {
    callback()
  }
}
