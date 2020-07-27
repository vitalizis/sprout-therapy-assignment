class AlgorithmManager {
    constructor() {
        this._strategy = null;
    }
    set strategy(strategy) {
        this._strategy = strategy;
    }
    get strategy() {
        return this._strategy;
    }
    getResult(inputData) {
        return this._strategy.getResult(inputData);
    }
}

export default AlgorithmManager;
