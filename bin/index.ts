import * as fs from 'fs'
import * as path from 'path'

console.log(123)

fs.readFile(path.resolve(__dirname, '../config/resolve.ts'), (error, data) => {
  if (error) {
    console.log('error occur')
  }
  console.log('data')
})