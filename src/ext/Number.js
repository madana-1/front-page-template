Object.defineProperty(Number.prototype, 'normalize', {
  value: function (min, max) {
    return (this - min) / (max - min)
  }
})

Object.defineProperty(Number.prototype, 'naturalize', {
  value: function () {
    return this < 0 ? -this : this
  }
})
