let isRuning = true

setTimeout(() => isRuning - false, 10)
process.nextTick(() => console.log('next tick'))

while (isRuning) {
  console.log('While loop is running...')
}