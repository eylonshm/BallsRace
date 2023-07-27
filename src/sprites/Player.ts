import { Vector } from '../constants'

export class Player {
  private playerImage: HTMLImageElement = new Image()
  private movingDirections = {
    up: false,
    down: false,
    right: false,
    left: false,
  }

  constructor(
    private pxSize: number,
    private position: Vector,
    private speed: number,
    image: string,
  ) {
    this.pxSize = pxSize
    this.position = position
    this.speed = speed
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
    const moveDirection = this.movingDirections
    if (key === 'ArrowUp') moveDirection.up = isKeyDown
    if (key === 'ArrowDown') moveDirection.down = isKeyDown
    if (key === 'ArrowRight') moveDirection.right = isKeyDown
    if (key === 'ArrowLeft') moveDirection.left = isKeyDown
  }

  handleKeyDown(e: KeyboardEvent): void {
    this.setMovingDirection(e, true)
  }

  handleKeyUp(e: KeyboardEvent): void {
    this.setMovingDirection(e, false)
  }

  movePlayer(): void {
    const moveDirection = this.movingDirections
    if (moveDirection.up) this.position.y -= this.speed
    if (moveDirection.down) this.position.y += this.speed
    if (moveDirection.right) this.position.x += this.speed
    if (moveDirection.left) this.position.x -= this.speed
  }
}
