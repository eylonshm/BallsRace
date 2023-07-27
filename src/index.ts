import { Player } from './sprites'
import { CanvasView } from './view/CanvasView'
import BALL_IMAGE from './images/ball.png'
import { Collision } from './Collision'
import { PLAYER_SIZE, PLAYER_SPEED } from './constants'

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

const gameLoop = (): void => {
  canvas.clear()
  canvas.drawSprite(player)
  if (!collision.isPlayerCollidingWithWalls(player, canvas)) {
    player.movePlayer()
  }
  window.requestAnimationFrame(() => gameLoop())
}

gameLoop()
