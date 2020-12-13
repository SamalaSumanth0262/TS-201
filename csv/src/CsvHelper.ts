import fs from 'fs'
export abstract class CsvHelper<T> {
  data: T[] = []
  fileDir: string = ''

  abstract mapRow(row: string[]): T

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
}
