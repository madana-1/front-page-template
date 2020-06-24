export default event => {
  if (event.touches && event.touches[0]) {
    const { clientX, clientY } = event.touches[0]
    return [clientX, clientY]
  }
}
