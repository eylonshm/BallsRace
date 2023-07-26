import { Vector } from '../constants'

export class Player {
  private image: HTMLImageElement = new Image()

  constructor(
    private size: number,
    private position: Vector,
    private speed: number,
    private movingUp: boolean,
    private movingDown: boolean,
    private movingRight: boolean,
    private movingLeft: boolean,
    image: string,
  ) {
    this.size = size
    this.position = position
    this.speed = speed
    this.movingUp = movingUp
    this.movingDown = movingDown
    this.movingRight = movingRight
    this.movingLeft = movingLeft
    this.image.src = image

    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  }

  get playerSize(): number {
    return this.size
  }

  get playerPosition(): Vector {
    return this.position
  }

  setMovingDirection(e: KeyboardEvent, isKeyDown: boolean): void {
    const key = e.code || e.key
    if (key === 'ArrowUp') this.movingDown = isKeyDown
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
    if (this.movingUp) this.position.y += this.speed
    if (this.movingDown) this.position.y -= this.speed
    if (this.movingRight) this.position.x += this.speed
    if (this.movingLeft) this.position.x -= this.speed
  }
}
