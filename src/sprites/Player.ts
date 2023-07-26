import { Vector } from '../constants'

export class Player {
  private image: HTMLImageElement = new Image()
  constructor(
    private size: number,
    private position: Vector,
    private speed: number,
    image: string,
  ) {
    this.size = size
    this.position = position
    this.speed = speed
    this.image.src = image
  }
}
