const sortTiers = (a, b) => {
  if (a.level < b.level) {
    return -1
  }
  if (a.level > b.level) {
    return 1
  }
  return 0
}
