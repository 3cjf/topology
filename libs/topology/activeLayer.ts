import { Node, occupyRect } from './models/node';
import { Canvas } from './canvas';

export class ActiveLayer extends Canvas {
  canvas = document.createElement('canvas');
  nodes: Node[] = [];
  constructor(parent: HTMLElement, options: any) {
    super(options);
    this.options.activeStyle = options.activeStyle || {};
    if (!this.options.activeStyle || !this.options.activeStyle.fillStyle) {
      this.options.activeStyle.strokeStyle = '#c73203';
    }
    this.canvas.style.position = 'absolute';
    this.canvas.style.left = '0';
    this.canvas.style.top = '0';
    parent.appendChild(this.canvas);
  }

  render() {
    super.render(false);

    const rect = occupyRect(this.nodes);
    if (!rect) {
      return;
    }

    const ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = this.options.activeStyle.strokeStyle;
    ctx.beginPath();
    ctx.strokeRect(rect.x - 3, rect.y - 3, rect.width + 6, rect.height + 6);
    ctx.stroke();
  }
}