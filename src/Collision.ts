import { Directions, Vector } from './constants'
import { Player } from './sprites'
import { CanvasView } from './view/CanvasView'

export class Collision {
  isPlayerCollidingWithWalls = (
    player: Player,
    view: CanvasView,
  ): string | undefined => {
    let canvasEl = view.canvas
    const playerPosition = player.pos
    if (playerPosition.x <= 0) return Directions.LEFT
    if (playerPosition.x + player.size >= canvasEl.width)
      return Directions.RIGHT
    if (playerPosition.y + player.size >= canvasEl.height)
      return Directions.DOWN
    if (playerPosition.y <= 0) return Directions.DOWN
    return
  }
}
