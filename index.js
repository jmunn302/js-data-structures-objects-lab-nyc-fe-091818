// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driverCopy = {...driver} //spread operator
  driverCopy[key] = value
  return driverCopy
}
