import fs from 'fs'
import {dateStringToDate} from './utils'
import {MatchResult} from './enums'
import {MatchData} from './tuples'
export class CsvHelper {
  data: MatchData[] = []
  fileDir: string = ''

  constructor(fileDir: string) {
    this.fileDir = fileDir
  }

  read() {
    this.data = fs
      .readFileSync(this.fileDir, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',')
      })
      .map(this.mapRow)
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ]
  }
}
