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
      indentText = ' '.repeat(i*2);
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
}
