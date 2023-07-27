import { Player } from './sprites'
import { CanvasView } from './view/CanvasView'
import BALL_IMAGE from './images/ball.png'

const canvas = new CanvasView('#playField')
const player = new Player(
  50,
  { x: 14, y: 30 },
  3,
  false,
  false,
  false,
  false,
  BALL_IMAGE,
)

const gameLoop = (): void => {
  canvas.clear()
  canvas.drawSprite(player)
  player.movePlayer()
  window.requestAnimationFrame(() => gameLoop())
}

gameLoop()
