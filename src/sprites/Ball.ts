import { Vector } from '../constants'
import { Directions } from '../constants'

export class Ball {
  private ballImg: HTMLImageElement = new Image()
  constructor(
    private ballSize: number,
    private position: Vector,
    private ballSpeed: number,
    private ballMoveDirection: string,
    ballImg: string,
  ) {
    this.ballSize = ballSize
    this.position = position
    this.ballSpeed = ballSpeed
    this.ballMoveDirection = ballMoveDirection
    this.ballImg.src = ballImg
  }

  get image(): HTMLImageElement {
    return this.ballImg
  }

  get size(): number {
    return this.ballSize
  }

  get pos(): Vector {
    return this.position
  }

  get speed(): number {
    return this.ballSpeed
  }

  get moveDirection(): string {
    return this.ballMoveDirection
  }

  moveBall(canvas: HTMLCanvasElement): void {
    const ballXPos = this.position.x
    if (this.ballMoveDirection === Directions.LEFT) {
      this.position.x -= this.ballSpeed
      if (ballXPos <= 0) this.position.x = canvas.width + 10
    }
    if (this.ballMoveDirection === Directions.RIGHT) {
      this.position.x += this.ballSpeed
      if (ballXPos + this.ballSize >= canvas.width) this.position.x = -10
    }
  }
}
