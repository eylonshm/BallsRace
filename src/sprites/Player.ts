import { Vector } from '../constants'

export class Player {
  private playerImage: HTMLImageElement = new Image()

  constructor(
    private pxSize: number,
    private position: Vector,
    private speed: number,
    private movingUp: boolean,
    private movingDown: boolean,
    private movingRight: boolean,
    private movingLeft: boolean,
    image: string,
  ) {
    this.pxSize = pxSize
    this.position = position
    this.speed = speed
    this.movingUp = movingUp
    this.movingDown = movingDown
    this.movingRight = movingRight
    this.movingLeft = movingLeft
    this.playerImage.src = image

    document.addEventListener('keydown', this.handleKeyDown.bind(this))
    document.addEventListener('keyup', this.handleKeyUp.bind(this))
  }

  get image(): HTMLImageElement {
    return this.playerImage
  }

  get size(): number {
    return this.pxSize
  }

  get pos(): Vector {
    return this.position
  }

  setMovingDirection(e: KeyboardEvent, isKeyDown: boolean): void {
    const key = e.code || e.key
    if (key === 'ArrowUp') this.movingUp = isKeyDown
    if (key === 'ArrowDown') this.movingDown = isKeyDown
    if (key === 'ArrowRight') this.movingRight = isKeyDown
    if (key === 'ArrowLeft') this.movingLeft = isKeyDown
  }

  handleKeyDown(e: KeyboardEvent): void {
    this.setMovingDirection(e, true)
  }

  handleKeyUp(e: KeyboardEvent): void {
    this.setMovingDirection(e, false)
  }

  movePlayer(): void {
    if (this.movingUp) this.position.y -= this.speed
    if (this.movingDown) this.position.y += this.speed
    if (this.movingRight) this.position.x += this.speed
    if (this.movingLeft) this.position.x -= this.speed
  }
}
