export const dateStringToDate = (value: string): Date => {
  // '02/04/2010'
  var dateParts = value.split('/') // ['02', '04', '2010']
  var datePartsInt = dateParts.map((value: string): number => parseInt(value)) // [02, 04, 2010]
  return new Date(datePartsInt[2], datePartsInt[1] - 2, datePartsInt[0])
}
