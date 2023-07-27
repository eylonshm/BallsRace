import { Ball, Player } from './sprites'
import { CanvasView } from './view/CanvasView'
import BALL_IMAGE from './images/ball.png'
import { Collision } from './Collision'
import { Directions, PLAYER_SIZE, PLAYER_SPEED } from './constants'
import { getRandomNumber, loop } from './utils'

const canvas = new CanvasView('#playField')
const canvasEl = canvas.canvas
const collision = new Collision()
const player = new Player(
  PLAYER_SIZE,
  {
    x: (canvasEl.width - PLAYER_SIZE) / 2,
    y: canvasEl.height - (PLAYER_SIZE + 10),
  },
  PLAYER_SPEED,
  BALL_IMAGE,
)

const generateBalls = (): Ball[] => {
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

const balls = generateBalls()
const gameLoop = (): void => {
  canvas.clear()
  balls.forEach((ball) => canvas.drawSprite(ball))
  if (!collision.isPlayerCollidingWithWalls(player, canvas)) {
    player.movePlayer()
  }
  balls.forEach((ball) => ball.moveBall(canvas.canvas))
  canvas.drawSprite(player)
  window.requestAnimationFrame(() => gameLoop())
}

gameLoop()
