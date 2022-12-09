class Validator {
  static checkBridgeSize(size) {
    if (!this.#isNumber(size)) throw new Error();
    if (!this.#isRangeOfBridgeSize(size)) throw new Error();
  }

  static checkMoving(moving) {
    if (!this.#isValidMoving(moving)) throw new Error();
  }

  static checkGameCommand(gameCommand) {
    if (!this.#isValidGameCommand(gameCommand)) throw new Error();
  }

  static #isNumber(number) {
    const check = /^[0-9]+$/;
    return check.test(num);
  }

  static #isRangeOfBridgeSize(size) {
    return size >= 3 && size <= 20;
  }

  static #isValidMoving(moving) {
    return moving === 'U' || moving === 'D';
  }

  static #isValidGameCommand(gameCommand) {
    return gameCommand === 'R' || gameCommand === 'Q';
  }
}

module.exports = Validator;
