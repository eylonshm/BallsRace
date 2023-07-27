import { Ball, Player } from '~/sprites'

export class CanvasView {
  canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D | null
  private newGameButton: HTMLButtonElement | null
  private triggerImpossibleButton: HTMLButtonElement | null
  private levelCountDiv: HTMLDivElement | null

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')
    this.newGameButton = document.querySelector('#new')
    this.triggerImpossibleButton = document.querySelector('#impossibleButton')
    this.levelCountDiv = document.querySelector('#levelCount')
  }

  clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  onClickStart(startFunction: () => void): void {
    this.newGameButton?.addEventListener('click', () => startFunction())
  }

  onClickImpossibleMode(triggerImpossibleFunction: () => void): void {
    this.triggerImpossibleButton?.addEventListener('click', () =>
      triggerImpossibleFunction(),
    )
  }

  drawSprite(sprite: Player | Ball): void {
    if (!sprite) return

    this.context?.drawImage(
      sprite.image,
      sprite.pos.x,
      sprite.pos.y,
      sprite.size,
      sprite.size,
    )
  }

  changeLevelString(level: number): void {
    if (!this.levelCountDiv) return
    this.levelCountDiv.innerHTML = level.toString()
  }
}
