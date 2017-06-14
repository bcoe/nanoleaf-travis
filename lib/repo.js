const symbols = require('./symbols')

module.exports = class Repo {
  constructor(name, panelId, isPublic) {
    this._isPublic = !!isPublic
    this._name = name
    this._panelId = panelId
    this._state = symbols.GREEN
  }
  get state() {
    return this._state
  }
  set state(state) {
    this._state = state
  }
  get name() {
    return this._name
  }
  get panelId() {
    return this._panelId
  }
  get public() {
    return this._isPublic
  }
  getState(animationCounter) {
    const r = {}
    r[symbols.BROKEN] = 255
    r[symbols.GREEN] = 0
    r[symbols.BUILDING] = 255 * (animationCounter % 2)
    r[symbols.UNKNOWN] = 120
    const g = {}
    g[symbols.BROKEN] = 0
    g[symbols.GREEN] = 255
    g[symbols.BUILDING] = 255 * (animationCounter % 2)
    g[symbols.UNKNOWN] = 120
    const b = {}
    b[symbols.BROKEN] = 0
    b[symbols.GREEN] = 0
    b[symbols.BUILDING] = 0
    b[symbols.UNKNOWN] = 120

    return {
      id: this.panelId,
      r: r[this.state],
      g: g[this.state],
      b: Number(b[this.state])
    }
  }
}
