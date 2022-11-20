
class BridgeGame {
  #bridge;
  #result;
  #attempts;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#result = new Map([
      ['U', []],
      ['D', []],
    ]);
    this.#attempts = 1;
  }

  move() {
    this.#bridge.move();
  }

  retry() {
    this.#result = new Map([
      ['U', []],
      ['D', []],
    ]);
    this.#attempts += 1;
    this.#bridge.initializeCurrentDirection();
  }

  isAnswer(direction) {
    if (this.#bridge.isCurrentDirection(direction)) return true;
    return false;
  }

  isGameEnd() {
    if (this.#bridge.isBridgeEnd()) return true;
    return false;
  }

  getResult() {
    return this.#result;
  }

  getAttempts() {
    return this.#attempts;
  }

  updateResult(direction) {
    for (let dir of this.#result.keys()) {
      if (dir === direction) continue;
      this.#result.get(dir).push(' ');
    }
    if (this.isAnswer(direction)) {
      this.#result.get(direction).push('O');
      return;
    }
    this.#result.get(direction).push('X');
  }
}

module.exports = BridgeGame;
