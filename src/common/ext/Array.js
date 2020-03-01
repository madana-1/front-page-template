Object.defineProperty(Array.prototype, 'get', {
  value: function (index) {
    return this[index]
  }
})
