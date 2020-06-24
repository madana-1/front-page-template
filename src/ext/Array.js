Object.defineProperty(Array.prototype, 'get', {
  value: function (index) {
    return this[index]
  }
})

Object.defineProperty(Array.prototype, 'chunk', {
  value: function (size) {
    return this.reduce((result, _, i) => {
      return i % size
        ? result
        : [...result, this.slice(i, i + size)]
    }, [])
  }
})
