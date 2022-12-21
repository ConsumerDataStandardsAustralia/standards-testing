export function generateRandomDecimalInRangeFormatted(min: number, max: number, places: number): string {
    let value:number = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value.toString()).toFixed(places);
}

export function generateRandomNumericInRangeFormatted(min: number, max: number, places: number): number {
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, places);
    return Math.floor(rand*power) / power;
}