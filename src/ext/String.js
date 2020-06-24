Object.defineProperty(String.prototype, 'truncate', {
  value: function (threshold, suffix = '') {
    if (this.length <= threshold) {
      return this
    }
    return `${this.slice(0, threshold)}${suffix}`
  }
})
