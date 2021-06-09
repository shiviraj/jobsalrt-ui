const DECIMAL_RANGE = 0

const displayNum = value => {
  if (value >= 1000 && value < 1000000) return (value / 1000).toFixed(DECIMAL_RANGE) + 'K'
  if (value >= 1000000 && value < 1000000000) return (value / 1000).toFixed(DECIMAL_RANGE) + 'M'
  return value.toFixed(DECIMAL_RANGE)
}

export {displayNum}
