import {CsvFileReader} from './CsvFileReader'
import {MatchResult} from './enums'

const csvInstance = new CsvFileReader('football.csv')
csvInstance.read()

const matches = csvInstance.data

let manWins = 0

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.Home) {
    manWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.Away) {
    manWins++
  }
}
console.log('manWins Wins yo', manWins)
