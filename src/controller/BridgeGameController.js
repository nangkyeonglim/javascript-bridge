const BridgeMaker = require('../BridgeMaker');
const BridgeGame = require('../models/BridgeGame');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeGameController {
  #bridgeGame;

  start() {
    OutputView.printInitialMessage();
    this.#readBridgeSizePhase();
  }

  #readBridgeSizePhase() {
    InputView.readBridgeSize(this.#createBridgeGame.bind(this));
  }

  #createBridgeGame(size) {
    this.#bridgeGame = new BridgeGame(
      BridgeMaker(size, BridgeRandomNumberGenerator.generate())
    );
    this.#readMovingPhase();
  }

  #readMovingPhase() {
    InputView.readMoving(this.#checkAnswerPhase.bind(this));
  }

  #checkAnswerPhase(moving) {
    this.#bridgeGame.updateResult(moving);
    OutputView.printMap(this.#bridgeGame.getResult());
    if (this.#bridgeGame.isCorrectMoving(moving)) {
      return this.#correctAnswerPhase();
    }
    this.#readGameCommandPhase();
  }

  #correctAnswerPhase() {
    if (this.#bridgeGame.isGameEnd()) {
      OutputView.printResult(this.#bridgeGame.getResult());
      return OutputView.close();
    }
    this.#bridgeGame.move();
    this.#readMovingPhase();
  }

  #readGameCommandPhase() {
    InputView.readGameCommand(this.aa.bind(this));
  }
}

module.exports = BridgeGameController;
