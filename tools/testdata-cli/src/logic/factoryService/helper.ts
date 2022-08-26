import ShortUniqueId from 'short-unique-id';

export class Helper {

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
