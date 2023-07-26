import { Player } from './sprites'
import { CanvasView } from './view/CanvasView'
import BALL_IMAGE from './images/ball.png'

const canvas = new CanvasView('#playField')
const player = new Player(
  50,
  { x: 5, y: 5 },
  30,
  true,
  false,
  false,
  false,
  BALL_IMAGE,
)

const gameLoop = (): void => {
  canvas.clear()
  canvas.drawSprite(player)

  window.requestAnimationFrame(() => gameLoop())
}

gameLoop()
