/** Streaming exponential moving average. Zero dependencies. */
export class EWMA {
  private alpha: number;
  private value: number | null = null;
  constructor(alpha: number) {
    if (!(alpha > 0 && alpha <= 1)) throw new RangeError("alpha must be in (0, 1]");
    this.alpha = alpha;
  }
  update(x: number): number {
    this.value = this.value === null ? x : this.alpha * x + (1 - this.alpha) * this.value;
    return this.value;
  }
}
