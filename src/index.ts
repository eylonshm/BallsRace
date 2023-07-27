import { Ball, Player } from './sprites'
import { CanvasView } from './view/CanvasView'
import PLAYER_IMAGE from './images/player.png'
import { Collision } from './Collision'
import { Directions, PLAYER_SIZE, PLAYER_SPEED } from './constants'
import { generateBalls } from './utils'

const canvas = new CanvasView('#playField')
let level = 1

const moveToNextLevel = (canvas: CanvasView) => {
  level++
  canvas.changeLevelString(level)
  generateNewLevel()
}

const gameLoop = (
  balls: Ball[],
  player: Player,
  canvas: CanvasView,
  collision: Collision,
): Function | void => {
  canvas.clear()
  balls.forEach((ball) => canvas.drawSprite(ball))
  canvas.drawSprite(player)

  const wallCollided = collision.isPlayerCollidingWithWalls(player, canvas)
  const isWonLevel = wallCollided === Directions.UP

  if (isWonLevel) return moveToNextLevel(canvas)
  if (collision.isPlayerCollidingWithBalls(player, balls)) return
  if (wallCollided) return

  player.movePlayer()
  balls.forEach((ball) => ball.moveBall(canvas.canvas))
  window.requestAnimationFrame(() => gameLoop(balls, player, canvas, collision))
}

const generateNewLevel = (ballsArg?: Ball[]) => {
  const canvasEl = canvas.canvas
  const balls = ballsArg || generateBalls()
  const collision = new Collision()
  const player = new Player(
    PLAYER_SIZE,
    {
      x: (canvasEl.width - PLAYER_SIZE) / 2,
      y: canvasEl.height - (PLAYER_SIZE + 10),
    },
    PLAYER_SPEED,
    PLAYER_IMAGE,
  )

  gameLoop(balls, player, canvas, collision)
}

canvas.onClickStart(() => {
  level = 1
  canvas.changeLevelString(level)
  generateNewLevel()
})
