import { Directions, Vector } from './constants'
import { Ball, Player } from './sprites'
import { CanvasView } from './view/CanvasView'

export class Collision {
  private checkBallCollision = (player: Player, ball: Ball): boolean => {
    if (
      player.pos.x <= ball.pos.x + ball.size &&
      player.pos.x + player.size >= ball.pos.x &&
      player.pos.y <= ball.pos.y + ball.size &&
      player.pos.y + player.size >= ball.pos.y
    ) {
      return true
    }
    return false
  }

  isPlayerCollidingWithBalls = (player: Player, balls: Ball[]): boolean => {
    let isColliding = false
    balls.every((ball, i) => {
      if (this.checkBallCollision(player, ball)) {
        isColliding = true
        return
      }
      return true
    })
    return isColliding
  }

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
    if (playerPosition.y <= 0) return Directions.UP
    return
  }
}
