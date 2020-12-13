import {CsvHelper} from './CsvHelper'
import {MatchData} from './tuples'
import {MatchResult} from './enums'
import {dateStringToDate} from './utils'
export class CsvFileReader extends CsvHelper<MatchData> {
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
