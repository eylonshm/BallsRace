import { Ball } from './sprites'
import { Directions } from './constants'
import BALL_IMAGE from './images/ball.png'

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

export const generateBalls = (): Ball[] => {
  const numOfBalls = getRandomNumber(10, 30)
  const BallsArr: Ball[] = []
  loop(numOfBalls, () => {
    const ballSize = getRandomNumber(10, 45)
    const ballPosition = {
      x: getRandomNumber(20, 450),
      y: getRandomNumber(10, 500),
    }
    const ballSpeed = getRandomNumber(1, 4)
    const newBall = new Ball(
      ballSize,
      ballPosition,
      ballSpeed,
      Directions.LEFT,
      BALL_IMAGE,
    )
    BallsArr.push(newBall)
  })
  return BallsArr
}
