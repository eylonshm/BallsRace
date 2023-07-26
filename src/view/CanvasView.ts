import { Player } from '~/sprites'
import { Vector } from '../constants'

export class CanvasView {
  canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D | null
  private newGameButton: HTMLButtonElement | null
  private tryAgainButton: HTMLButtonElement | null

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')
    this.newGameButton = document.querySelector('#new')
    this.tryAgainButton = document.querySelector('#try')
  }

  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  onClickStart(startFunction: (canvas: CanvasView) => void): void {
    this.newGameButton?.addEventListener('click', () => startFunction(this))
  }

  OnClickTryAgain(tryAgainFunction: (canvas: CanvasView) => void): void {
    this.tryAgainButton?.addEventListener('click', () => tryAgainFunction(this))
  }

  drawSprite(sprite: Player): void {
    if (!sprite) return

    this.context?.drawImage(
      sprite.image,
      sprite.pos.x,
      sprite.pos.y,
      sprite.size,
      sprite.size,
    )
  }
}
