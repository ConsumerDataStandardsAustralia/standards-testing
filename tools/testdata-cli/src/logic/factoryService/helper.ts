import ShortUniqueId from 'short-unique-id';

export class Helper {

  private static helper = new Helper();

  private verbose: boolean = false;
  private indent = 0;

  private constructor() {
  }

  // Logging
  public static log(message: string, indent?: number) {
    if (!Helper.helper.verbose) return;

    let indentText = '';
    let i = 0;
    if (indent) i = 0;
    i += Helper.helper.indent;

    if (i > 0) {
      indentText = ' '.repeat(i * 2);
    }

    console.log(indentText + message);
  }

  public static error(message: string) {
    console.log('ERROR:: ' + message);
  }

  public static setVerbose(v: boolean) {
    Helper.helper.verbose = v;
  }

  public static indentInc() {
    Helper.helper.indent++;
  }

  public static indentDec() {
    Helper.helper.indent--;
    if (Helper.helper.indent < 0) Helper.helper.indent = 0;
  }


  // Field validation functions
  public static isPositiveInteger(val: unknown | undefined): boolean {
    if (val === undefined) return false;
    if (Number.isInteger(val) && (val as number) > 0) return true;
    return false;
  }

  // Random value functions
  public static randomId(): string {
    const newId = new ShortUniqueId({
      dictionary: 'number',
      length: 9
    });
    return newId();
  }

  public static randomBoolean(truePercenatge: number | undefined | null): boolean {
    // if no percentage is specified or it is greater that 1 (ie 100%), revert to 50/50
    if (truePercenatge == null || truePercenatge > 1) {
      return Math.random() < 0.5;
    } else {
      return Math.random() < truePercenatge;
    }
  }


  public static randomTimeInThePast(): string {

    // TODO need to create a time only string
    // Random number of milliseconds in the past two years
    const inc = Math.random() * 1000 * 60 * 60 * 24 * 365 * 2;

    // Create an ISO string of that date
    return new Date(Date.now() - inc).toISOString();
  }

  public static randomTimeInTheFuture(): string {
    // TODO need to create a time only string
    // Random number of milliseconds in the past two years
    const inc = Math.random() * 1000 * 60 * 60 * 24 * 365 * 2;

    // Create an ISO string of that date
    return new Date(Date.now() + inc).toISOString();
  }

  public static randomDateTimeInThePast(): string {
    // Random number of milliseconds in the past two years
    const inc = Math.random() * 1000 * 60 * 60 * 24 * 365 * 2;

    // Create an ISO string of that date
    return new Date(Date.now() - inc).toISOString();
  }

  public static randomDateTimeInTheFuture(): string {
    // Random number of milliseconds in the past two years
    const inc = Math.random() * 1000 * 60 * 60 * 24 * 365 * 2;

    // Create an ISO string of that date
    return new Date(Date.now() + inc).toISOString();
  }

  /**
   * @returns a random date time string guaranteed  to be be after a day-month-year reference date
   * @param {number} year - the year for the reference date 
   * @param {number} month - the month for the reference date
   * @param {number} day - the day for the reference date
   * @param {number} minDiff - the minimum deviation in days from the reference date
   * @param {number} maxDiff - the maximum deviation in days from the reference date
   * 
   * */
  public static randomDateTimeAfter(year: number, month: number, day: number, minDiff?: number, maxDiff?: number): string {
    let min = minDiff ? minDiff : 30;
    let max = maxDiff ? maxDiff : 365;
    if (min > max) {
      min = 30;
      max = 365;
    }
    // number of milliseconds in one day
    const count = 1000 * 60 * 60 * 24;
    let diff = count * (min + Math.floor(Math.random() * (max - min)));
    // Create an ISO string of that date
    return new Date(Date.UTC(year, month, day) + diff).toISOString();
  }

  /**
 * @returns a random date time string guaranteed  to be be after a day-month-year reference date
 * @param {string} referenceDate - the reference date as a ISO DateTime string (ie 2022-02-15T03:22:13.603Z)
 * @param {number} minDiff - the minimum deviation in days from the reference date (default 30)
 * @param {number} maxDiff - the maximum deviation in days from the reference date (default 365)
 * 
 * */
  public static randomDateTimeAfterDateString(referenceDate: string, minDiff?: number, maxDiff?: number): string {

    let year = parseInt(referenceDate.substring(0, 4));
    let month = parseInt(referenceDate.substring(5, 7)) - 1;
    let day = parseInt(referenceDate.substring(8, 10));

    let min = minDiff ? minDiff : 30;
    let max = maxDiff ? maxDiff : 365;
    if (min > max) {
      min = 30;
      max = 365;
    }
    // number of milliseconds in one day
    const count = 1000 * 60 * 60 * 24;
    let diff = count * (min + Math.floor(Math.random() * (max - min)));
    // Create an ISO string of that date
    return new Date(Date.UTC(year, month, day) + diff).toISOString();
  }

  /**
* @returns a random date time string guaranteed  to be be before a day-month-year reference date
* @param {number} year - the year for the reference date 
* @param {number} month - the month for the reference date
* @param {number} day - the day for the reference date
* @param {number} minDiff - the minimum deviation in days from the reference date
* @param {number} maxDiff - the maximum deviation in days from the reference date
* 
* */
  public static randomDateTimeBefore(year: number, month: number, day: number, minDiff?: number, maxDiff?: number): string {
    let min = minDiff ? minDiff : 30;
    let max = maxDiff ? maxDiff : 365;
    if (min > max) {
      min = 30;
      max = 365;
    }
    // number of milliseconds in one day
    const count = 1000 * 60 * 60 * 24;
    let diff = count * (min + Math.floor(Math.random() * (max - min)));
    // Create an ISO string of that date
    return new Date(Date.UTC(year, month, day) - diff).toISOString();
  }

  /**
* @returns a random date time string guaranteed  to be be after a day-month-year reference date
* @param {string} referenceDate - the reference date as a ISO DateTime string (ie 2022-02-15T03:22:13.603Z)
* @param {number} minDiff - the minimum deviation in days from the reference date (default 30)
* @param {number} maxDiff - the maximum deviation in days from the reference date (default 365)
* 
* */
  public static randomDateTimeBeforeDateString(referenceDate: string, minDiff?: number, maxDiff?: number): string {
    let year = parseInt(referenceDate.substring(0, 4));
    let month = parseInt(referenceDate.substring(5, 7)) - 1;
    let day = parseInt(referenceDate.substring(8, 10));

    let min = minDiff ? minDiff : 30;
    let max = maxDiff ? maxDiff : 365;
    if (min > max) {
      min = 30;
      max = 365;
    }
    // number of milliseconds in one day
    const count = 1000 * 60 * 60 * 24;
    let diff = count * (min + Math.floor(Math.random() * (max - min)));
    // Create an ISO string of that date
    return new Date(Date.UTC(year, month, day) - diff).toISOString();
  }

  /**
   * 
   * @param minDate 
   * @param maxDate 
   * @returns a random date time string guaranteed to be within minDate and maxDate
   */
public static generateRandomDateTimeInRange(minDate: string, maxDate: string): string {
  let minimumDate = Date.parse(minDate);
  let maximumDate = Date.parse(maxDate);
  let retDate = (minimumDate + Math.floor(Math.random() * (maximumDate - minimumDate)))
  return new Date(retDate).toISOString()
}

/**
 * 
 * @param min the minimum value to be returned
 * @param max the maximum value to be returned
 * @returns a number  which lies between min and max formatted as a string with 2 decimals
 */
  public static generateRandomDecimalInRange(min: number, max: number, decimals?: number) : string {
    let dec = decimals != undefined? decimals : 2
    if (min  > max) 
      return min.toFixed(dec);
    else 
      return ((min + Math.random() * (max - min))).toFixed(dec);
  }

  /**
   * 
   * @param min the minimum value to be returned
   * @param max the maximum value to be returned
   * @returns an integer which lies between min and max (inclusive) 
   */
  public static generateRandomIntegerInRange(min: number, max:number): number{
    // handle the unconventional cases
    if (min == max) return min;
    if (min > max) return max;
    if (max == 0) return 0;
    let interval = 1 / (max - min);
    let rv = Math.random();
    let intervalSum = 0;
    let found: boolean = false;
    let idx: number = 0;
    while (found == false) {
        intervalSum += interval;
        if (rv <= intervalSum || idx >= (max-min)) {
            found = true;
            if (Math.random() > 0.5)
              break;
            else {
              idx++;
            }
        } else {
          idx++;
        }
    }
    return min + idx;
  }
}
